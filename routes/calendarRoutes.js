const express = require("express");
const router = express.Router();

const calendarController = require("../controllers/calendarController");

router.post("/calendarapi", calendarController.fetchcalendarAPI);
router.post("/ocasaints", calendarController.fetchOCASaintLives);
router.post("/rocsaints", calendarController.fetchROCSaints);
router.post("/rocfast", calendarController.fetchROCFast);

module.exports = router;
