const express = require("express");
const router = express.Router();

const calendarController = require("../controllers/calendarController");

router.post("/calendarapi", calendarController.fetchcalendarAPI);
router.post("/ocasaints", calendarController.fetchOCASaints);
router.post("/rocinfo", calendarController.fetchROCInfo);
router.post("/ocafasts", calendarController.fetchOCAFast);

module.exports = router;
