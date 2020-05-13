const express = require("express");
const router = express.Router();

const calendarController = require("../controllers/calendarController");

router.post("/ocasaintlives", calendarController.fetchOCASaintLives);
router.post("/rocsaints", calendarController.fetchROCSaints);

module.exports = router;
