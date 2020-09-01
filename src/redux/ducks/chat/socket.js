import io from "socket.io-client"
import store from "../../store"
import { addMessage } from "./actions"

const socket = io.connect("http://localhost:3001")

const dispatch = store.dispatch

socket.on("message", (msg) => {
  dispatch(addMessage(msg))
})

export default socket
