const router = require('express').Router();
const { auth } = require('../../utils/auth');
const { create, createBlankFav, list, show, update, destroy } = require('../controllers/fav.controller');

router.route("/:favListId").post(auth, create)
router.route("/").post(auth, createBlankFav)
router.route("/").get(auth, list)
router.route("/:favId").get(auth, show)
router.route("/:favId").put(auth, update)
router.route("/:favId").delete(auth, destroy)

module.exports = router;
