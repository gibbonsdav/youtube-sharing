import {
  SET_USER_URL,
  PLAY_VIDEO,
  PAUSE_VIDEO,
  FF_VIDEO,
  RWD_VIDEO,
} from "./definitions"

//state changes:
// -1 = unstarted
// 0 || PlayerState.ENDED = ended
// 1 || PlayerState.PLAYING = playing
// 2 || PlayerState.PAUSED = pause
// 3 || PlayerState.BUFFERING = buffering
// 5 || PlayerState.CUED = video cued | meaning when a video is cued and ready to play

const initialState = {
  userUrl: "",
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_URL:
      return { ...state, userUrl: action.payload }

    case PLAY_VIDEO:
      return { ...state, video: action.payload }

    case PAUSE_VIDEO:
      return { ...state, video: action.payload }

    case RWD_VIDEO:
      return { ...state, video: action.payload }

    case FF_VIDEO:
      return { ...state, video: action.payload }

    default:
      return state
  }
}
