const express = require('express');
const controller = require('../controllers/guestbookControllers')
const router = express.Router();

router.get('/', controller.landing_page)
router.get('/guestbook', controller.guestbook_page) 
router.get('/about', controller.about_page)
router.get('/new', controller.new_page)

module.exports = router;