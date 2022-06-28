var fs = require("fs");

var specials = JSON.parse(fs.readFileSync("./data/meals.json"));

/*Get meals view */
const meals = (req, res) => {
  res.render("meals", { title: "Travlr Getaways", specials });
};

module.exports = {
  meals,
};
