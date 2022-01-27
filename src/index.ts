import WebSocket, { WebSocketServer } from 'ws';

const wss = new WebSocketServer({port:5050})

wss.on('connection', (ws,req) => {

    console.log("Connection from address: " + req.socket.remoteAddress)
    
    ws.on('message', (data,isBinary) =>{

        wss.clients.forEach( (client) => {
            if(client.readyState === WebSocket.OPEN){
                client.send(data, {binary: isBinary})
            }
        })
    })
    
})