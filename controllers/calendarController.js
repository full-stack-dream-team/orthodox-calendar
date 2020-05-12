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
