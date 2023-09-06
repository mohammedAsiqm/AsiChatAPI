const express = require("express");
const app = express();
const port = 8080;
const http = require("http");
const cors = require("cors");
const WebSocket = require("ws");

const server = http.createServer(app);

server.listen(port, (err) => {
  if (err) return console.log("Internal Server Error!");
  console.log("Server running on port - " + port);
});

const wss = new WebSocket.Server({ server });

wss.on("connection", (ws) => {
  console.log("A client connected.");

  ws.on("message", (message) => {
    console.log(`Received: ${message}`);
    // Broadcast the received message to all connected clients
    wss.clients.forEach((client) => {
      console.log(client);
      if (client === ws && client.readyState === WebSocket.OPEN) {
        console.log('send');
        client.send(JSON.stringify(message));
      }
    });
  });

  // ws.on('close', () => {
  //   console.log('A client disconnected.');
  // });
});

// app.use(cors());
// app.use(express.json());

// app.get("/", () => {});
