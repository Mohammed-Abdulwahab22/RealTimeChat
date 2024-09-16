const express = require('express');
const router = express.Router();
const Conversation = require('../models/Conversations');
const { v4: uuidv4 } = require('uuid');
const auth = require('../middleware/auth');

router.post('/create', auth, async (req, res) => {
    try {
        const { participants } = req.body;
        const conversationId = uuidv4();
        const conversation = await Conversation.create({ conversationId, participants });
        res.status(201).json(conversation);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.get('/user/:userId', auth, async (req, res) => {
    try {
        const { userId } = req.params;
        const conversations = await Conversation.find({ participants: userId });
        res.status(200).json(conversations);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


router.get('/:conversationId', auth, async (req, res) => {
    try {
        const { conversationId } = req.params;
        const conversation = await Conversation.findOne({ conversationId });
        if (!conversation) {
            return res.status(404).json({ message: 'Conversation not found' });
        }
        res.status(200).json(conversation);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


router.put('/:conversationId', auth, async (req, res) => {
    try {
        const { conversationId } = req.params;
        const { participants } = req.body;
        const conversation = await Conversation.findOneAndUpdate(
            { conversationId },
            { participants },
            { new: true } // Return the updated document
        );
        if (!conversation) {
            return res.status(404).json({ message: 'Conversation not found' });
        }
        res.status(200).json(conversation);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.delete('/:conversationId', auth, async (req, res) => {
    try {
        const { conversationId } = req.params;
        const conversation = await Conversation.findOneAndDelete({ conversationId });
        if (!conversation) {
            return res.status(404).json({ message: 'Conversation not found' });
        }
        res.status(200).json({ message: 'Conversation deleted successfully' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


router.get('/search', auth, async (req, res) => {
    try {
        const { query } = req.query; // For example, a search keyword
        const conversations = await Conversation.find({
            $text: { $search: query }
        });
        res.status(200).json(conversations);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});




module.exports = router;
