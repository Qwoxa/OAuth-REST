const User = require('../models/user');
const jwt = require('jsonwebtoken');
var createError = require('http-errors')

const signToken = sub => {
    return jwt.sign({
        sub,
        iss: 'Nick Dyson',
        iat: Date.now(),
        exp: new Date().setDate(new Date().getDate() + 1)
    }, process.env.JWT_SECRET);
};

module.exports = {
    signUp: async(req, res, next) => {
        const { email, password } = req.body;

        const foundUser = await User.findOne({ "local.email": email });
        if (foundUser) {
            return next(createError(403, 'This email is already exists'));
        }
        
        const local = { email, password };
        const userData = { method: 'local', local };
        const user = await new User(userData).save();
        const token = signToken(user.id);

        res.status(201).json({ token });
    },

    signIn: async(req, res, next) => {
        res.status(201).json({ token: signToken(req.user.id) });
    }
};