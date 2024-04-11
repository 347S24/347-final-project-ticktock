import { useState } from 'react'
import reactLogo from './assets/react.svg'
import djangoLogo from './assets/django.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

// function App({username}) {
function App() {
  console.log("username is ", username);
  console.log(window);
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://www.djangoproject.com/" target="_blank">
          <img src={djangoLogo} className="logo" alt="Django logo" />
        </a>
      </div>
      <h1>Vite + React + Django + Aarushi</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <p>
          You are logged in as {username}.
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */

        <div>
          <title>Home page for Ticktock</title>
          <header>Ticktock</header>

          <main>
            <h1>Welcome to Ticktock, the <em>ultimate</em> progress tracker</h1>
            <p>Here is where a tracker would technically be.</p>
          </main>

          <foot>Ticktock Inc.</foot>

        </div>



      }
    </>
  )
}

export default App
