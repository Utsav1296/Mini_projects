const express = require('express')
const cors = require('cors')
const http = require('http')
const socketIo = require('socket.io')

const app = express()
app.use(cors())
let server = http.createServer(app)
const io = socketIo(server, {
   cors: {
      origin: "*",
      methods: ["GET", "POST"]
   }
})

let lastPrice = (Math.random() * 100) + 50; //random price of stock between 50 to 150
let day = 0;

io.on("connection", (socket) => {
   const interval = setInterval(() => {
      const changePercent = 2 * Math.random()//max 2% change
      let changedAmount = lastPrice * (changePercent / 100)
      changedAmount *= Math.floor(Math.random() * 2) === 1 ? 1 : -1;//randomly determines whether the change should be positive or negative.
      lastPrice += changedAmount
      socket.emit("stockDataSet", { price: lastPrice, day: ++day });
      console.log("last price", lastPrice)
   }, 2000)

   socket.on("disconnect", () => clearInterval(interval))
});

const PORT = 4000;
server.listen(PORT, () => console.log(`Server is running on port ${PORT}`))