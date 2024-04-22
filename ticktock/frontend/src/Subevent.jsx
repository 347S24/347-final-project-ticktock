import { useState, useEffect } from 'react';
import ProgressBar from './ProgressBar';

const Subevent = ({subevents}) => {
  const [event, setEvent] = useState([]);
  // Return text representing the current subevent, updating it as time goes on
    useEffect(() => {
        var current = new Date();
        subevents.forEach((subevent) => {
                setEvent(subevent);
        });
    }, []);
    return (
        <div id={"subevent"}>
            
                <div key={event.id}>
                    <h4>Current Subevent: {event.name}</h4>
                    <h4>{event.description}</h4>
                    <h4>Ending at: {event.end_time}</h4>
                </div>
        </div>
    );
};
export default Subevent;