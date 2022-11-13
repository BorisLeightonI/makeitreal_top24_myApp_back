const router = require('express').Router();
const mediaController = require('../controllers/media.controller');
const formData = require('../../utils/formdata');

router.route('/').post(formData, mediaController.send);

module.exports = router;