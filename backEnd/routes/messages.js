const express = require('express');
const router = express.Router();
const Message = require('../models/Messages');
const { v4: uuidv4 } = require('uuid');
const auth = require('../middleware/auth');

router.post('/send', auth, async (req, res) => {
    try {
        const { senderId, recipientId, content } = req.body;
        const messageId = uuidv4();
        const message = await Message.create({ messageId, senderId, recipientId, content });
        res.status(201).json(message);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.get('/messages/:senderId/:recipientId', async (req, res) => {
    const { senderId, recipientId } = req.params;
    try {
        const messages = await Message.find({
            $or: [
                { senderId, recipientId },
                { senderId: recipientId, recipientId: senderId }
            ]
        }).sort({ createdAt: 1 }); 
        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching messages', error });
    }
});

module.exports = router;
