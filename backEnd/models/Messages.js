const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    senderId:{
        type: String,
        required:true,
        unique:true
    },
    recipientId: {
        type: String,
        required:true,
        unique:true
    },
    content:{
        type:String,
        required:true
    },
    createdAt:{ 
        type: Date,
        default: Date.now
    },
    isRead:{
        type: Boolean,
        default: false

    }

});

module.exports = mongoose.model('Message',messageSchema,'Messages');
