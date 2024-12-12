const express = require("express");
const router = express.Router();
const { addMenu, getMenu } = require("../controller/addmenuController");
const { addMenuItem, getItems } = require("../controller/addItemController");

router.route("/addmenu").post(addMenu);
router.route("/getmenu").get(getMenu);

router.route("/additem").post(addMenuItem);
router.route("/getmenuitem").get(getItems);

module.exports = router;
