const express = require('express');
const controller = require('../controllers/guestbookControllers')
const router = express.Router();

router.get('/', controller.guestbook_page);

router.get('/new-entry', controller.new_entry);
router.post('/new-entry', controller.post_new_entry);

router.get('/posts/:author', controller.show_user_entries);

router.get('/about', controller.about_page);




module.exports = router;