import { useSelector, useDispatch } from "react-redux"

const UPDATE_USERNAME = "rooms/UPDATE_USERNAME"

const initialState = {
  username: "",
}

export function updateUsername(username) {
  return {
    type: UPDATE_USERNAME,
    payload: username,
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USERNAME:
      return { ...state, username: action.payload }

    default:
      return state
  }
}

export function useRoom() {
  const dispatch = useDispatch()
  const updateName = (name) => dispatch(updateUsername(name))

  const username = useSelector((appState) => appState.roomState.username)

  return { username, updateName }
}
