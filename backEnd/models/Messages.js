const mongoose = require('mongoose');
const messageSchema = new mongoose.Schema({
    _id: {
      type: String,
      required: true
    },
    senderId: {
      type: String,
      required: true,
    },
    recipientId: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    isRead: {
      type: Boolean,
      default: false
    }
  });
  
  messageSchema.index({ senderId: 1, recipientId: 1, createdAt: 1 }, { unique: true });

  module.exports = mongoose.model('Message', messageSchema, 'Messages');
  