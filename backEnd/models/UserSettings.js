const mongoose = require('mongoose');

const UserSettings = new mongoose.Schema({
    userId:{
        type: String,
        required: true
    },
    notificationSettings:{
        type: Object,
        required: true,
        default: {
            email: true,
            push: true,
            sms: true,
            inApp: true,
            desktop: true,
            mobile: true,
            web: true,
            all: true
        }
    },
    theme:{
        type: String,
        required: true,
        default: 'light'
    },
    language:{
        type: String,
        required: true,
        default: 'en'
    }
});

module.exports = mongoose.model('UserSettings',UserSettings,'UserSettings')
