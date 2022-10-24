const router = require("express").Router();
const { auth } = require("../../utils/auth");
const { create, createBlankFavList, list, show, update, destroy } = require('../controllers/favList.controller');

router.route("/:userId").post(auth, create)
router.route("/").post(auth, createBlankFavList)
router.route("/").get(auth, list)
router.route("/:favListId").get(auth, show)
router.route("/:favListId").put(auth, update)
router.route("/:favListId").delete(auth, destroy)

module.exports = router;
