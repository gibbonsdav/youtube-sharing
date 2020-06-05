import React, { useEffect, useState } from "react"
import Validator from "validator"
import { FaRegEnvelope } from "react-icons/fa"
import {FacebookShareButton, TumblrShareButton, TwitterShareButton, WhatsappShareButton} from "react-share"
import {FacebookIcon, TumblrIcon, TwitterIcon, WhatsappIcon} from "react-share"

import Player from "./Player"
import Chat from "./Chat"
import { useChat } from "../hooks"

import "../styles/header.css"
import "../styles/room.css"

export default props => {
  const { join } = useChat()
  const [phonenumber, setPhonenumber] = useState("")
  const [numberError, setNumberError] = useState("")


  useEffect(() => {
    join(props.match.params.id)
  }, [props.match.params])
  
  if valid is still === true
  function handleSubmit(e) {
    e.preventDefault()

    let valid = true

    if(Validator.isMobilePhone(phonenumber)) {
      setNumberError("")
    } else {
      valid = false
      setNumberError("please enter a valid cellphone number")
    }

    if(valid) {
    }
  }

  return (
    <div>
      <header>
        <img
          src="https://www.freelogodesign.org/file/app/client/thumb/4101f644-0146-4e51-8b38-f32814e6577c_200x200.png?1585004744122"
          alt="wetube logo"
        />
        
        <p className="wetubeTitle">WeTube Party Room</p>

        <p className="roomId">Your room id is: {props.match.params.id}</p>
      </header>

      <div className="share">
        <p>Share with your friends:</p>

          <FacebookShareButton className="shareButtons" url={`http://localhost:3000/${props.match.params.id}`}>
            <FacebookIcon size={25} round={true}/>
          </FacebookShareButton>

          <TwitterShareButton className="shareButtons" url={`http://localhost:3000/${props.match.params.id}`}>
            <TwitterIcon size={25} round={true}/>
          </TwitterShareButton>

          <TumblrShareButton className="shareButtons" url={`http://localhost:3000/${props.match.params.id}`}>
            <TumblrIcon size={25} round={true}/>
          </TumblrShareButton>

          <WhatsappShareButton className="shareButtons" url={`http://localhost:3000/${props.match.params.id}`}>
            <WhatsappIcon size={25} round={true}/>
          </WhatsappShareButton>

        <form onSubmit={handleSubmit}>
          <label className={numberError ? "error" : ""} htmlFor="phoneNumberInput">
            Enter a valid number: {numberError && numberError}
          </label>

          <input className="phoneNumberInput" type="text" placeholder="7021234567" value={phonenumber} onChange={e => setPhonenumber(e.target.value)} />

          <button type="submit" className="sendTXTButton">
            <FaRegEnvelope className="envelopeIcon" />
          </button>
        </form>

      </div>

      <Player />

      <Chat props={props} />
    </div>
  )
}

