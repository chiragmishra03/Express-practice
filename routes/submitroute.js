const express = require("express");
const router = express.Router();
const showHomepage = require("../controllers/showhomepage");

router.get("/", showHomepage);

module.exports = router;
