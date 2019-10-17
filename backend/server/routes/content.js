const router = require('express-promise-router')();
const authCheck = require('../middleware/auth').authCheck;
const contentController = require('../controllers/content');

router.route('/public')
  .get(contentController.public);

router.route('/secret')
  .get(authCheck, contentController.secret);


module.exports = router;