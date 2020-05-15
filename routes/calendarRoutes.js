const express = require("express");
const router = express.Router();

const calendarController = require("../controllers/calendarController");

router.post("/ocasaints", calendarController.fetchOCASaintLives);
router.post("/rocsaints", calendarController.fetchROCSaints);
router.post("/calendarapi", calendarController.fetchcalendarAPI);

module.exports = router;
