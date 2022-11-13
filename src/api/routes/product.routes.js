const router = require("express").Router();
const { auth } = require("../../utils/auth");
const { 
  create, createBlankProduct, 
  list, show, update, destroy, 
  listAll, cartList 
} = require('../controllers/product.controller');

router.route("/").post(create)
router.route("/").post(auth, createBlankProduct)
router.route("/").get(list)
router.route("/all").get(listAll)
router.route("/cart").post(cartList)
router.route("/:productId").get(auth, show)
router.route("/:productId").put(auth, update)
router.route("/:productId").delete(auth, destroy)

module.exports = router;
