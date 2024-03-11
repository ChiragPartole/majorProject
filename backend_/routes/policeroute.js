const router = require("express").Router();
const policecontroller = require("../controllers/policecontroller");
const checkauth = require("../middlewares/checkauth");
router.post("/signup",policecontroller.signup);
router.post("/signin",policecontroller.login);
router.get("/seefirs",policecontroller.getfirs)
module.exports = router;