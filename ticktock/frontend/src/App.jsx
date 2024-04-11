import { useState } from 'react'
import reactLogo from './assets/react.svg'
import djangoLogo from './assets/django.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Progress_bar from './ProgressBar'

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
            <Progress_bar bgcolor="#f11946" progress="50" height="50" />
          </main>

          <footer>Ticktock Inc.</footer>
        </div>



      }
    </>
  )
}

export default App
