import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"

//imported components
import Home from "./Home"
// import Room from "./Room"

export default (props) => {
  return (
    <Router>
      <div className="wrapper">
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/room/:id" component={Room} /> */}
      </div>
    </Router>
  )
}
