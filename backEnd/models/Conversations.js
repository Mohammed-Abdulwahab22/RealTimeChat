const mongoose = require('mongoose');

const conversationSchema = new mongoose.Schema({ 
    conversationId: {
        type: String,
        required: true,
        unique: true
    },
    participants: {
        type: [String],
        required: true,

    },
    lastMessage:{
        type: String,

    },
    createdAt:{
        type: Date,
        default: Date.now
    }
    
})
conversationSchema.index({ participants: 'text' });


module.exports = mongoose.model('Conversation',conversationSchema,'Conversations')