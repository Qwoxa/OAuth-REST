const passport = require('passport');

module.exports.signIn = passport.authenticate('local', { session: false });
module.exports.authCheck = passport.authenticate('jwt', { session: false });
module.exports.oauthGoogle = passport.authenticate('googleToken', { session: false });
module.exports.oauthFacebook = passport.authenticate('facebookToken', { session: false });