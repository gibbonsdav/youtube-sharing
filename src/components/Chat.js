import React, { useState, useEffect, useRef } from "react"

import { Picker } from "emoji-mart"

import { useChat, useRoom } from "../hooks" //useRoom by iperez

import "../styles/chat.css"
import "emoji-mart/css/emoji-mart.css"

import { FiSend } from "react-icons/fi"
import { AiOutlineSmile } from "react-icons/ai"
import { AiOutlineMessage } from "react-icons/ai"

export default (props) => {
  const { add, messages } = useChat()
  const { username, updateName } = useRoom()

  const [message, setMessage] = useState("")
  const [color, setColor] = useState("#000000")
  const [size, setSize] = useState("15")

  function onEnterPress(e) {
    if (e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault()
      handleSubmit(e)
    }
  }

  const chat = useRef(null)

  useEffect(() => {
    chat.current.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  function handleSubmit(e) {
    e.preventDefault()

    if (message !== "") {
      add({
        roomname: props.props.match.params.id, //iperez
        username,
        message,
        color: color,
        size: size,
      })
    }

    setMessage("")
    document.getElementById("messageInputBox").focus()
  }

  function emojiToggle(e) {
    e.preventDefault()

    var mojis = document.getElementById("mojiPicker")

    if (mojis.style.display === "none") {
      mojis.style.display = "block"
    } else {
      mojis.style.display = "none"
    }
  }

  return (
    <div className="chatComponent">
      <h3>
        Chat With Your Friends!&nbsp;
        <AiOutlineMessage />
      </h3>

      <div className="messageList">
        {messages.map((msg, i) => (
          <p key={"message" + i}>
            <span style={{ color: msg.color, fontSize: msg.size + "px" }}>
              {msg.username}: {msg.message}
            </span>
          </p>
        ))}
        <div ref={chat} />
      </div>

      <div className="messageBox">
        <form onSubmit={handleSubmit}>
          <textarea
            className="nameInputBox"
            value={username}
            onChange={(e) => updateName(e.target.value)}
            onKeyUp={onEnterPress}
            placeholder="Change username"
          />

          <input
            className="colorPicker"
            type="color"
            onChange={(e) => setColor(e.target.value)}
            value={color}
          />

          <input
            className="fontSizePicker"
            type="text"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          />

          <button className="emojiButton" onClick={emojiToggle}>
            <AiOutlineSmile className="smileyFace4Button" />
          </button>

          <div id="mojiPicker">
            <Picker
              set="apple"
              onSelect={(emoji) => setMessage(message + emoji.native)}
            />
          </div>

          <textarea
            id="messageInputBox"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyUp={onEnterPress}
            placeholder="OMG that was so funny!"
          />

          <button className="sendMsgButton" type="submit">
            <FiSend />
          </button>
        </form>
      </div>
    </div>
  )
}
