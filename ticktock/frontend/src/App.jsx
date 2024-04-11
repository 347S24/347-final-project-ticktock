import { useState } from 'react'
import reactLogo from './assets/react.svg'
import djangoLogo from './assets/django.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Progress_bar from './ProgressBar'
import Fetch from './Fetch'

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
            <Progress_bar bgcolor="#f11946" height="50" start_time="2021-10-01T00:00:00Z" end_time="2021-10-01T00:00:10Z" />
          </main>

          <footer>Ticktock Inc.</footer>
        </div>



      }
    </>
  )
}

export default App
