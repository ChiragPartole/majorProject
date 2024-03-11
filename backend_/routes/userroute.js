const router = require("express").Router();
const usercontroller = require("../controllers/usercontroller");
const checkauth = require("../middlewares/checkauth")
router.post("/signup",usercontroller.signup);
router.post("/signin",usercontroller.login);
router.post("/addfir",checkauth,usercontroller.addfir);
module.exports = router