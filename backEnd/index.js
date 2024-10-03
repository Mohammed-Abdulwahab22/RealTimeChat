const express = require('express');
const cors = require('cors');
const http = require('http'); 
const { Server } = require('socket.io');
const connectDB = require('./config/db');
require('dotenv').config(); 
const userRoutes = require('./routes/users');
const messagesRoutes = require('./routes/messages');
const conversationsRoutes = require('./routes/conversations');
const userSettings = require('./routes/userSettings');

const app = express();
const server = http.createServer(app); 
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000", 
        methods: ["GET", "POST"]
    }
});

connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/messages', messagesRoutes);
app.use('/api/conversations', conversationsRoutes);
app.use('/api/userSettings', userSettings);

io.on('connection', (socket) => {
    console.log('A user connected: ' + socket.id);

    socket.on('sendMessage', (message) => {
        socket.to(message.recipientId).emit('receiveMessage', message);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected: ' + socket.id);
    });
});

const port = process.env.PORT || 5000;
server.listen(port, '0.0.0.0', () => {
    console.log('Server running on http://0.0.0.0:' + port);
});
