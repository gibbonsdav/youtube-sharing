import React, { useEffect, useState } from "react"
import { BrowserRouter as Router } from "react-router-dom"
import shortid from "shortid"
//imported hooks
import { useRoom } from "../hooks"
//imported styles
import "../styles/home.css"

export default (props) => {
  const [roomId, setRoomId] = useState("")
  const [name, setName] = useState("")

  const { updateName } = useRoom()

  useEffect(() => {
    setRoomId(shortid.generate())
  }, [props.match.params.id])

  function handleSubmit(e) {
    e.preventDefault()

    updateName(name)
    props.history.push("/room/" + roomId)
  }

  return (
    <Router>
      <div className="usernameGrabber">
        <p>
          In order to create a room, we need a username from you. What would you
          like to be called?
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="john_smith"
            onChange={(e) => setName(e.target.value)}
            required
          />

          <button type="submit">Generate My Room!</button>
        </form>
      </div>
    </Router>
  )
}
