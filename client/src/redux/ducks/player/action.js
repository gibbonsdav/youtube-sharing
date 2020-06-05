import {
  SET_USER_URL,
  PLAY_VIDEO,
  PAUSE_VIDEO,
  FF_VIDEO,
  RWD_VIDEO,
} from "./definitions"

export function loadUserUrl(video) {
  return {
    type: SET_USER_URL,
    payload: video,
  }
}

export function play(video) {
  return {
    type: PLAY_VIDEO,
    payload: video,
  }
}

export function pause(video) {
  return {
    type: PAUSE_VIDEO,
    payload: video,
  }
}

export function rewind(video) {
  return {
    type: RWD_VIDEO,
    payload: video,
  }
}

export function fastForward(video) {
  return {
    type: FF_VIDEO,
    payload: video,
  }
}
