var fs = require("fs");

var rentals = JSON.parse(fs.readFileSync("./data/rooms.json", "utf-8"));

/*Get room sview */
const rooms = (req, res) => {
  res.render("rooms", { title: "Travlr Getaways", rentals });
};

module.exports = {
  rooms,
};
