const puppeteer = require("puppeteer");
const { Cluster } = require("puppeteer-cluster");
const cheerio = require("cheerio");
const axios = require("axios");

const mongoose = require("mongoose");
const Fastlegend = mongoose.model("Fastlegend");

// OrthoCal API
exports.fetchcalendarAPI = (req, res) => {
  const { year, month, day, jurisdiction } = req.body;
  const apiURL = "https://orthocal.info";
  const url = `${apiURL}/api/${jurisdiction}/${
    year ? `${year}/${month ? `${month}/${day ? `${day}/` : ""}` : ""}` : ""
  }`;

  Fastlegend.findOne({ jurisdiction: "oca" })
    .then((legend) => {
      axios.get(url).then((info) => {
        const calendarAPI =
          typeof info.data === "object" && typeof info.data.length !== "number"
            ? { ...info.data }
            : [...info.data];

        if (
          typeof calendarAPI.length !== "number" &&
          typeof calendarAPI.fast_level === "number"
        ) {
          if (calendarAPI.fast_level === 0) {
            calendarAPI.fast_exception_desc = "Fast Free";
          } else if (calendarAPI.fast_level > 0) {
            if (!calendarAPI.fast_exception_desc.replace(" ", "")) {
              calendarAPI.fast_exception_desc = "Strict Fast";
            } else if (
              calendarAPI.fast_exception_desc.toLowerCase() === "no overrides"
            ) {
              calendarAPI.fast_exception_desc = "Strict Fast";
            }
          }
        }

        legend.fasts.forEach((fast, i) => {
          if (fast.desc === calendarAPI.fast_exception_desc) {
            calendarAPI.symbol = fast.symbol;
          }
        });
        if (!calendarAPI.symbol) {
          calendarAPI.symbol = "";
        }

        res.json({ calendarAPI });
      });
    })
    .catch((err) => console.error(err));
};

// OCA Saint Lives
exports.fetchOCASaints = async (req, res) => {
  const { year, month, day } = req.body;

  const url = `https://www.oca.org/saints/lives/${
    year && month && day ? `${year}/${month}/${day}/` : ""
  }`;

  puppeteer
    .launch({ args: ["--no-sandbox"] })
    .then((browser) =>
      browser
        .newPage()
        .then((page) =>
          page
            .goto(url)
            .then(() => page.waitForSelector("article.saint"))
            .then(() => page.content())
            .catch((err) => console.error(err))
        )
        .then((html) => {
          const saints = [];
          const $ = cheerio.load(html);

          $("article.saint").each(function () {
            saints.push({
              title: $(this).find("h2").text(),
              image: $(this).find("img").attr("src") || "",
              link: "https://oca.org" + $(this).find("a").attr("href"),
            });
          });

          res.json({ saints });
          browser.close();
        })
        .catch((err) => console.error(err))
    )
    .catch((err) => console.error(err));
};

// ROC Info
exports.fetchROCInfo = async (req, res) => {
  const { year, month, day } = req.body;
  const url = `https://www.holytrinityorthodox.com/calendar/calendar.php?dt=0&header=1&lives=5&trp=0&scripture=0${
    year && month && day
      ? `&year=${parseInt(year)}&month=${parseInt(month)}&today=${parseInt(
          day
        )}`
      : ""
  }`;

  try {
    const browser = await puppeteer.launch({ args: ["--no-sandbox"] });
    const page = await browser.newPage();

    await page.goto(url);
    await page.waitForSelector("body");

    const html = await page.content();

    let $ = cheerio.load(html);

    // Info
    const fast = {
      fastDesc: "",
      allowed: "",
      disallowed: "",
      symbol: "",
    };
    const feastDay = [];
    const links = [];

    // Fast
    if ($(".headerfast").text().trim()) {
      fast.fastDesc = $(".headerfast").text();
    } else if ($(".headernofast").text().trim()) {
      fast.fastDesc = $(".headernofast").text();
    } else {
      fast.fastDesc = "Fast Free";
    }

    if (fast.fastDesc) {
      const fastLegend = await Fastlegend.findOne({ jurisdiction: "roc" });

      fast.fastDesc = fast.fastDesc.replace(/<[^>]+>/g, "");

      if (fastLegend) {
        fastLegend.fasts.forEach((legendFast, i) => {
          if (fast.fastDesc.includes(legendFast.desc)) {
            fast.allowed = legendFast.allowed;
            fast.disallowed = legendFast.disallowed;
            fast.symbol = legendFast.symbol;
          }
        });
      }
    }

    // Feast Day
    $("span.headerheader").each(function () {
      $(this).find("span.headerfast").remove();
      if ($(this).text().includes(":")) {
        feastDay.push(
          $("span.headerheader").text().split(":")[1].split(".")[0].trim()
        );
      }
    });

    // Saints
    $(".normaltext a").each(function () {
      if (links.includes($(this).attr("href")) === false) {
        links.push($(this).attr("href"));
      }
    });

    const saints = [];

    // Launch puppeteer-cluster
    const cluster = await Cluster.launch({
      concurrency: Cluster.CONCURRENCY_BROWSER,
      maxConcurrency: 5,
      puppeteerOptions: {
        headless: true,
        args: ["--no-sandbox"],
      },
    });

    await (async () => {
      await cluster.task(async ({ page: newPage, data: link }) => {
        await newPage.goto(link);
        await newPage.waitForSelector("tbody");
        const saintsHTML = await newPage.content();

        $ = cheerio.load(saintsHTML);
        let saint;

        $("tbody").each(function () {
          let image = link;
          if ($(this).find("img").attr("src")) {
            let remove = "";
            for (let i = link.length - 1; i > -1; i--) {
              if (link[i] !== "/") {
                remove += link[i];
              } else {
                remove = remove.split("").reverse().join("");

                i = -1;
              }
            }

            image = image.replace(remove, $(this).find("img").attr("src"));
          } else {
            image = "";
          }

          saint = {
            title: $(this).find("p.header12").text(),
            image,
            link,
          };
        });

        saints.push(saint);
      });

      links.forEach((link) => {
        cluster.queue(link);
      });

      await cluster.idle();
      await cluster.close();

      return;
    })();

    res.json({ saints, feastDay, fast });
    browser.close();
  } catch {
    (err) => console.error(err);
  }
};

// OCA All Fasts
exports.fetchOCAFast = async (req, res) => {
  const ocaFast = await Fastlegend.findOne({ jurisdiction: "oca" });
  return res.json({ ocaFast });
};

// ROC All Fasts
exports.fetchROCFast = async (req, res) => {
  const rocFast = await Fastlegend.findOne({ jurisdiction: "roc" });
  return res.json({ rocFast });
};
