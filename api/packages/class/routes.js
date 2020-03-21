const express = require('express');
const router = express.Router();
const handlers = require('./handlers')
const auth =  require('../../middlewares/auth');


router.get('/', auth, handlers.list);
router.post('/', auth, handlers.create);
router.delete('/cancel',auth, handlers.cancel)

module.exports = router;
