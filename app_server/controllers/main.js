var fs = require("fs");

var sides = JSON.parse(fs.readFileSync("./data/index_side.json", "utf-8"));
var blogs = JSON.parse(fs.readFileSync("./data/index_blog.json", "utf-8"));

/*GET homepage */
const index = (req, res) => {
  res.render("index", { title: "Travlr Getaways", sides, blogs });
};
module.exports = {
  index,
};
