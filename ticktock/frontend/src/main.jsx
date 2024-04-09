import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"; // allows us to route to different pages
//import home from './contact.jsx' // import the app (page)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*<App username={username}/>*/}
    <App />
  </React.StrictMode>,
)

// add router 
// npm run autobuild
// npm run preview in new terminal

