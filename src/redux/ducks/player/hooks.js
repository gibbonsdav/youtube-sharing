import { useSelector } from "react-redux"
import socket from "./socket"

export function useUser() {
  //sets user's inputted url for video
  const loadUrl = useSelector((appState) => appState.userState.userUrl)

  //loads video for all users in room
  const load = (video) => {
    socket.emit("loadUserUrl", video)
  }

  return { loadUrl, load }
}
