const tmi = require('tmi.js');
const server = require('http').createServer();
const socket = require('socket.io');
var io = socket(server, {
  cors: {
    origin: "https://localhost:4200",
    credentials: true
  }
});

server.listen(3000, () => {
    console.log("Socket IO is lestineng on port 3000");
});

const client = new tmi.Client({
  options: { debug: true },
  connection: {
    secure: true,
    reconnect: true
  },
  identity: {
    username: 'royalwong',
    password: 'oauth:rfph1lsls3moxz3sy57kh8ne31m1xc'
  },
  channels: ['Royaleest']
});

exports.init = function(){
    client.connect();

    client.on('message', (channel, tags, message, self) => {

        if(self || !message.startsWith('!')) {
          return;
        }
      
        const args = message.slice(1).split(' ');
        const command = args.shift().toLowerCase();
        console.log(command);
        if(command === 'spin') {
          console.log("spinning wheel")
          socket.sockets.emit('spin', `from chat`);
        } else if(command === 'fuertes_declaraciones') {
          client.say(channel, `@Pollosilva se la come	pero ali es la neta(❤ω❤)`);
        } else if(command === "pollito"){
          client.say(channel, `@Pollosilva SabaPing (❤ω❤)`);
        } else if(command === "alirycal"){
          client.say(channel, `No es gay si es en trio...(❤ω❤)`);
        } else if(command === "minecraft"){
          socket.sockets.emit('minecraft', `mc_event`);
        }else if(command === "wero"){
          client.say(channel, `Wero se la come (❤ω❤)`);
        }
      });
}

io.on('connection', (socket) => {
  socket.on('disconnect', () => {
    // console.log('user disconnected');
  });

  socket.on('empireSaysAnswerRevealSelected', (answerData)=>{
    // io.emit("spin", answerToReveal)
    io.emit("empireSaysAnswer", answerData);
  })

  socket.on('empireSaysWrongAnswerSource', (data)=>{
    io.emit("empireSaysWrongAnswerServer", data.userId);
  })

  socket.on('addPointsToPlayer', (playerNumber)=>{
    io.emit("addPointsToPlayer", playerNumber);
  })
  
  socket.on("buzzerRoundWrongAnswer", (data) => {
    io.emit("buzzerRoundWrongAnswer", data);
  })

  socket.on("gameReset", (data) => {
    io.emit("gameReset", data);
  })

  socket.on("revealEmpireSayQuestion", (data) => {
    io.emit("revealEmpireSayQuestion", data);
  })
  
  
});

exports.emitNewQUestionRequested = function(questionData){
  io.emit("newEmpireSaysQuestionRequested", questionData);
}