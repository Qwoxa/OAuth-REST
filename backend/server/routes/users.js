const router = require('express-promise-router')();
const userController = require('../controllers/users');
const auth = require('../middleware/auth');

const { validateBody, schemas } = require('../helpers/routeHelpers');


router.route('/signup')
  .post(validateBody(schemas.authSchema), userController.signUp);

router.route('/signin')
  .post(validateBody(schemas.authSchema), auth.signIn, userController.signIn);

router.route('/oauth/google')
  .post(auth.oauthGoogle, userController.signIn);

router.route('/oauth/facebook')
  .post(auth.oauthFacebook, userController.signIn);


module.exports = router;