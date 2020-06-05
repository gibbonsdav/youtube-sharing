import io from "socket.io-client"
import store from "../../store"
import { loadUserUrl, fastForward, play, rewind, pause } from "./actions"

const socket = io.connect("http://localhost:3001")

const dispatch = store.dispatch

socket.on("loadUserUrl", (video) => {
  dispatch(loadUserUrl(video.video))
})

socket.on("play", (video) => {
  dispatch(play(video.video))
})

socket.on("pause", (video) => {
  dispatch(pause(video.video))
})

socket.on("rwd", (video) => {
  dispatch(rewind(video.video))
})

socket.on("ff", (video) => {
  dispatch(fastForward(video.video))
})

export default socket
