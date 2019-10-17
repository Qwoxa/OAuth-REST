const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const LocalStrategy = require('passport-local').Strategy;
const GooglePlusTokenStrategy = require('passport-google-plus-token');
const FacebookTokenStrategy = require('passport-facebook-token');
const { ExtractJwt } =  require('passport-jwt');
const User = require('../models/user');

// JWT
passport.use(
  new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET,
    issuer: 'Nick Dyson'
  },
  async({ sub : _id }, done) => {
    try {
      const user = await User.findOne({ _id });
      done(null, user);
    } catch(err) {
      done(err);
    }
  })
);

// GOOGLE
passport.use(
  'googleToken',
  new GooglePlusTokenStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET
  },
  async (accessToken, refreshToken, profile, done) => {
    try {
      const foundUser = await User.findOne({ "google.id": profile.id });
      if (foundUser) return done(null, foundUser);
      
      const newUser = await new User({
        method: 'google',
        google: {
          id: profile.id,
          email: profile.emails[0].value
        }
      }).save();
  
      done(null, newUser);
    } catch (error) {
      done(error);
    }
  })
);

// FACEBOOK
passport.use(
  'facebookToken',
  new FacebookTokenStrategy({
    clientID: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET
  },
  async (accessToken, refreshToken, profile, done) => {
    try {
      const foundUser = await User.findOne({ "facebook.id": profile.id });
      if (foundUser) return done(null, foundUser);
      
      const newUser = await new User({
        method: 'facebook',
        facebook: {
          id: profile.id,
          email: profile.emails[0].value
        }
      }).save();
  
      done(null, newUser);
    } catch (error) {
      done(error);
    }
  })
)

// LOCAL
passport.use(
  new LocalStrategy({
    usernameField: 'email'
  },
  async (email, password, done) => {
    try {
      const user = await User.findOne({ "local.email": email });
      if (!user) return done(null);

      const passwordValid = await user.isValidPassword(password);
      if (!passwordValid) return done(null);
      
      return done(null, user);
    } catch(err) {
      done(err);
    }
  })
);