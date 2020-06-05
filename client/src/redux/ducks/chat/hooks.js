import { useSelector } from "react-redux"
import socket from "./socket"

export function useChat() {
  //messages array, holds all users' chat messages
  const messages = useSelector((appState) => appState.chatState.messages)

  const add = (msg) => {
    socket.emit("message", msg)
  }

  const join = (roomname) => {
    socket.emit("join", {
      roomname: roomname,
      id: socket.id,
    })
  }

  return { add, messages, join }
}
