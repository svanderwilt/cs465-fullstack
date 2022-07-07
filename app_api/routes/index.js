const { Router } = require("express");
const express = require("express");
const router = express.Router();
const { expressjwt: jwt } = require("express-jwt");
auth = jwt({
  secret: process.env.JWT_SECRET,
  algorithms: ["HS512"],
  userProperty: "payload",
});

const tripsController = require("../controllers/trips");
const authController = require("..//controllers/authentication");

router.route("/login").post(authController.login);

router.route("/register").post(authController.register);

router
  .route("/trips")
  .get(tripsController.tripsList)
  .post(auth, tripsController.tripsAddTrip);

router
  .route("/trips/:tripCode")
  .get(tripsController.tripsFindByCode)
  .put(auth, tripsController.tripsUpdateTrip);

module.exports = router;
