import io from "socket.io-client"

const socket = io.connect("http://172.16.0.3:3001")

export default socket
