import { useState, useEffect } from 'react';
const Fetch = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch('http://127.0.0.1:8000/users/api/events')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setEvents(data);
      });
  }, []);
  return (
    <div>
      
      {events.map((event) => (
        <div key={event.id}>
          <h1>{event.title}</h1>
          <p>{event.description}</p>
          <p>{event.start_time}</p>
          <p>{event.end_time}</p>
        </div>
      ))}
    </div>
  );
};
export default Fetch;