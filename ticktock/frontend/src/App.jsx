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
      {
        <div className="container">
          <header>Ticktock</header>

          <main>
            <h1>Welcome to Ticktock, the <em>ultimate</em> progress tracker</h1>
            <p>Here is where a tracker would technically be.</p>
          </main>

          <footer>Ticktock Inc.</footer>
        </div>



      }
    </>
  )
}

export default App
