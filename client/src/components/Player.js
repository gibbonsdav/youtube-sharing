import React, { useState } from "react"
import ReactPlayer from "react-player"
import { withRouter } from "react-router-dom"

import { MdSlowMotionVideo } from "react-icons/md"
import { FaGhost } from "react-icons/fa"

import "../styles/player.css"

import { useUser } from "../hooks"

export default withRouter((props) => {
  const { load, loadUrl } = useUser()

  const [userUrl, setUserUrl] = useState("")

  function handleSubmit(e) {
    e.preventDefault()

    load({ roomname: props.match.params.id, video: userUrl })
  }

  function visibility(e) {
    e.preventDefault()

    var inst = document.getElementById("instructionBox")

    if (inst.style.display === "none") {
      inst.style.display = "block"
    } else {
      inst.style.display = "none"
    }
  }

  return (
    <div className="videoWrapper">
      <h2>
        Vide
        <MdSlowMotionVideo className="videoicon" /> &nbsp;Time
      </h2>

      <div id="instructionBox">
        <p>How To Use:</p>
        <ul>
          <li>Go to YouTube.com</li>
          <li>Find a video you want to watch with your friends</li>
          <li>Copy the URL at the top of your web browser</li>
          <li>Bring that URL and paste it in the box below</li>
          <li>Hit "SUBMIT" and you're good to go!</li>
          <li>
            Once you're done, you can click our little ghost friend to hide
            these instructions and get to watching your videos!
          </li>
        </ul>
      </div>

      <form autoComplete="off" className="hideButtonForm">
        <button
          className="hideButton"
          title="show/hide instructions"
          onClick={visibility}
        >
          <FaGhost className="ghostie" />
        </button>
      </form>

      <form className="youtubeUrlForm" onSubmit={handleSubmit}>
        <label htmlFor="userUrl">Enter a YouTube URL:&nbsp; &nbsp; </label>

        <input
          type="url"
          name="userUrl"
          id="userUrl"
          onChange={(e) => setUserUrl(e.target.value)}
          placeholder="https://www.youtube.com"
          pattern="https?://.*"
          size="50"
          required
        />

        <button className="submitButton" type="submit">
          Submit
        </button>
      </form>

      <div className="youTube">
        <ReactPlayer
          url={loadUrl}
          className="videoPlayer"
          width={1100}
          height={500}
          controls={true}
        />
      </div>
    </div>
  )
})
