import { useState } from 'react'
import reactLogo from './assets/react.svg'
import djangoLogo from './assets/django.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Fetch from './Fetch'
import EventForm from './EventForm'

function App() {
  return (
    <>
      <div className="container">
        <header>Ticktock</header>
        <div className="content">
          <main>
            <h1>Welcome to Ticktock, the <em>ultimate</em> progress tracker.</h1>
            <EventForm></EventForm>
            <div className='eventList'>
              <h1>All Events</h1>
              <Fetch></Fetch>
            </div>
          </main>
          <footer>
            TickTock Inc.
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;