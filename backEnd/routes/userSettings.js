const express = require('express');
const router = express.Router();
const UserSettings = require('../models/UserSettings');
const { v4: uuidv4 } = require('uuid');
const auth = require('../middleware/auth');

router.get('/:userId', auth, async (req, res) => {
    try {
        const { userId } = req.params;
        const userSettings = await UserSettings.findOne({ userId });
        res.status(200).json(userSettings);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


module.exports = router;
