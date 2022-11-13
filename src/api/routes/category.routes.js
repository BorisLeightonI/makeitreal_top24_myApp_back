const router = require('express').Router();
const { auth } = require('../../utils/auth');
const { create, createBlankCategory, list, show, update, destroy } = require('../controllers/category.controller');


router.route("/").post(createBlankCategory)
router.route("/").get(list)

router.route("/:catId").put(update)


module.exports = router;
