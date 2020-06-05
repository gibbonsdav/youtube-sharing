const rooms = {}

module.exports = function (io) {
  io.on("connection", (socket) => {
    //join function - joins user to a new room
    socket.on("join", (obj) => {
      if (rooms.hasOwnProperty(obj.roomname)) {
        rooms[obj.roomname].push({
          username: obj.username,
          id: socket.id,
        })
      } else {
        rooms[obj.roomname] = [
          {
            username: obj.username,
            id: socket.id,
          },
        ]
      }

      socket.join(obj.roomname)

      io.to(obj.roomname).emit("room update", {
        room: obj.roomname,
        users: rooms[obj.roomname],
      })
    })

    //message function which sends msg to the room's message array
    socket.on("message", (msg) => {
      io.to(msg.roomname).emit("message", msg)
    })

    //load url function which broadcasts video in room
    socket.on("loadUserUrl", (video) => {
      console.log(video)
      io.emit("loadUserUrl", video)
    })

    socket.on("play", (video) => {
      console.log(play)
      io.emit("play", video)
    })

    socket.on("pause", (video) => {
      console.log(pause)
      io.emit("pause", video)
    })

    socket.on("rwd", (video) => {
      console.log(rewind)
      io.emit("rwd", video)
    })

    socket.on("ff", (video) => {
      console.log(fastForward)
      io.emit("ff", video)
    })

    //function to disconnect user from room
    socket.on("disconnect", (reason) => {
      for (room in rooms) {
        if (rooms[room].find((usr) => usr.id === socket.id)) {
          rooms[room] = rooms[room].filter((usr) => usr.id !== socket.id)
          io.to(room).emit("room update", {
            room,
            users: rooms[room],
          })
        }
      }
    })
  })
}
