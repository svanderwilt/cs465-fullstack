var fs = require("fs");

var side_bar = JSON.parse(fs.readFileSync("./data/news_side.json"));

/*Get news view */
const news = (req, res) => {
  res.render("news", { title: "Travlr Getaways", side_bar });
};

module.exports = {
  news,
};
