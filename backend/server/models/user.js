const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema({
    method:{
        type: String,
        enum: ['local', 'google', 'facebook'],
        required: true
    },
    local: {
        email: {
            type: String,
            lowercase: true
        },
        password: String
    },
    google: {
        id: String,
        email: {
            type: String,
            lowercase: true
        }
    },
    facebook: {

    }
});

userSchema.pre('save', async function() {
    if (this.method === 'local') {
        const salt = await bcrypt.genSalt(10);
        this.local.password = await bcrypt.hash(this.local.password, salt);
    }
});

userSchema.methods.isValidPassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.local.password);
};

module.exports = mongoose.model('User', userSchema);