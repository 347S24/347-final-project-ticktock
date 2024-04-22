import { useState, useEffect } from 'react';
import ProgressBar from './ProgressBar';
import Subevent from './Subevent';
import SubEventForm from './SubEventForm';
import { Button } from '@material-ui/core';
const Fetch = () => {
  const [events, setEvents] = useState([]);
  var id = 0;
  useEffect(() => {
    fetch('http://127.0.0.1:8000/users/api/events')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setEvents(data);
      });
      id += 1;
  }, []);
  return (
    <div id={"progress-bar"}>
      
      {events.map((event) => (
        <div key={event.id}>
          <h3>{event.name}</h3>
          <p>{event.description}</p>
          console.log(event.subevents)
          <ProgressBar id={id} start_time={event.start_time} end_time={event.end_time} bgcolor="green" height="20px"/>
          {event.subevents.length > 0 ? <Subevent subevents={event.subevents}/> : null}
          <SubEventForm></SubEventForm>
          </div>
      ))}
    </div>
  );
};
export default Fetch;