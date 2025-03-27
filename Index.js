const WebSocket = require('ws');

const server = new WebSocket.Server({ port: process.env.PORT || 3000 });

server.on('connection', socket => {
    console.log('New client connected');

    socket.on('message', message => {
        console.log(`Received: ${message}`);
        socket.send(`Echo: ${message}`);
    });

    socket.on('close', () => {
        console.log('Client disconnected');
    });
});

console.log('WebSocket server is running...');
