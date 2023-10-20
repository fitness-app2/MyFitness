var express = require('express');
var router = express.Router();
const {addNewUser, getUser, getAllUsers} = require("../controller/users")

/* GET users listing. */
router.get('/', getAllUsers);

router.post("/signup",addNewUser)
router.get("/login/:id",getUser)

module.exports = router;
