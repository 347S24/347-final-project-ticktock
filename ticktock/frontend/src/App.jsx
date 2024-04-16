import { useState } from 'react'
import reactLogo from './assets/react.svg'
import djangoLogo from './assets/django.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  // State for event form
  const [eventName, setEventName] = useState('');
  const [description, setDescription] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  // State for a counter (from the first version of App)
  const [count, setCount] = useState(0);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const eventData = {
      name: eventName,
      description: description,
      start_time: startTime,
      end_time: endTime,
    };

    // Posting data to the backend
    try {
      const response = await fetch('http://127.0.0.1:8000/users/api/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventData),
      });
      const jsonResponse = await response.json();
      console.log('Submit Response:', jsonResponse);
      // Optionally reset the form or handle the UI changes post submission
    } catch (error) {
      console.error('Error submitting event:', error);
    }
  };

  return (
    <>
      <div className="container">
        <header>Ticktock</header>
        <main>
          <h1>Welcome to Ticktock, the <em>ultimate</em> progress tracker.</h1>
          <form onSubmit={handleSubmit}>
            <input type="text" value={eventName} onChange={e => setEventName(e.target.value)} placeholder="Event Name" required />
            <input type="text" value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" required />
            <input type="datetime-local" value={startTime} onChange={e => setStartTime(e.target.value)} placeholder="Start Time" required />
            <input type="datetime-local" value={endTime} onChange={e => setEndTime(e.target.value)} placeholder="End Time" required />
            <button type="submit">Submit Event</button>
          </form>
          <button onClick={() => setCount(count + 1)}>Click me to increase count: {count}</button>
          <p>Here is where a tracker would technically be.</p>
        </main>
        <footer>Ticktock Inc.</footer>
      </div>
    </>
  );
}

export default App;