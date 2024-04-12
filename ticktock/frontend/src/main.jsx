import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // allows us to route to different pages
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

// Will be the login page component and where the application starts
// will redirect to tracker page
function Main() {
  return (
    <>
      {
        <div>
          <header>Ticktock</header>
          <main>
            <h1>Welcome to Ticktock, the <em>ultimate</em> progress tracker.</h1>
            <p>Here is where the login stuff would be.</p>
          </main>
        </div>

      },
      {
        <Router>
          <Routes>
            { }
            <Route
              exact
              path="/App.jsx"
              element={<App />}
            />
          </Routes>
        </Router>
      }
    </>
  )
}

export default Main
