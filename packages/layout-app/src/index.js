import React, { lazy } from 'react'
import ReactDOM from 'react-dom'
import App from './App'

window.appUrl = "http://localhost:3002"

ReactDOM.render(<App />, document.getElementById("main"));