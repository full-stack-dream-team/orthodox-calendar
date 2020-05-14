const puppeteer = require("puppeteer");
const cheerio = require("cheerio");

exports.fetchOCASaintLives = async (req, res) => {
  const { year, month, day } = req.body;
  const url = `https://www.oca.org/saints/lives/${
    year && month && day ? `${year}/${month}/${day}/` : ""
  }`;

  puppeteer
    .launch()
    .then((browser) => browser.newPage())
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
    })
    .catch((err) => console.error(err));
};

exports.fetchROCSaints = (req, res) => {
  const { year, month, day } = req.body;
  const url = `https://www.holytrinityorthodox.com/calendar/calendar.php?dt=0&header=0&lives=5&trp=0&scripture=0${
    year && month && day
      ? `&year=${parseInt(year)}&month=${parseInt(month)}&today=${parseInt(
          day
        )}`
      : ""
  }`;

  puppeteer
    .launch()
    .then((browser) =>
      browser
        .newPage()
        .then((page) =>
          page
            .goto(url)
            .then(() => page.waitForSelector("span.normaltext"))
            .then(() => page.content())
            .then((html) => {
              const $ = cheerio.load(html);
              const links = [];

              $(".normaltext a").each(function () {
                if (links.includes($(this).attr("href")) === false) {
                  links.push($(this).attr("href"));
                }
              });

              return links;
            })
            .then((links) =>
              Promise.all(
                links.map((link) =>
                  browser
                    .newPage()
                    .then((newPage) =>
                      newPage
                        .goto(link)
                        .then(() => newPage.waitForSelector("tbody"))
                        .then(() => newPage.content())
                    )
                    .then((html) => {
                      const $ = cheerio.load(html);

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

                          image = image.replace(
                            remove,
                            $(this).find("img").attr("src")
                          );
                        } else {
                          image = "";
                        }

                        saint = {
                          title: $(this).find("p.header12").text(),
                          image,
                          link,
                        };
                      });

                      return saint;
                    })
                    .catch((err) => console.error(err))
                )
              )
            )
            .then((saints) => {
              console.log(saints);
              return res.json({ saints: saints });
            })
            .catch((err) => console.error(err))
        )
        .catch((err) => console.error(err))
    )
    .catch((err) => console.error(err));
};
