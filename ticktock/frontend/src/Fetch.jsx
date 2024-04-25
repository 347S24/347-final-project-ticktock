import React, { useState, useEffect } from 'react';
import ProgressBar from './ProgressBar';
import Subevent from './Subevent';
import SubEventForm from './SubEventForm';
import { Button } from '@material-ui/core';

const Fetch = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/users/api/events')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setEvents(data);
      });
  }, []);

  // Function to determine the status of an event
  const getEventStatus = (event) => {
    const startDate = new Date(event.start_time);
    const endDate = new Date(event.end_time);
    const currentDate = new Date();

    if (currentDate < startDate) {
      return 'startingSoon';
    } else if (currentDate >= startDate && currentDate <= endDate) {
      return 'ongoing';
    } else {
      return 'finished';
    }
  };

  // Sort events by status: ongoing, starting soon, finished
  const sortedEvents = events.sort((a, b) => {
    const statusOrder = {
      startingSoon: 0,
      ongoing: 1,
      finished: 2,
    };
    return statusOrder[getEventStatus(a)] - statusOrder[getEventStatus(b)];
  });

  // Function to handle event deletion
  const handleDelete = async (eventId) => {
    try {
      const response = await fetch(`/users/api/event/${eventId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        // Filter out the deleted event from the events list
        setEvents(events.filter((event) => event.id !== eventId));
      } else {
        console.error('Failed to delete event');
      }
    } catch (error) {
      console.error('Error deleting event:', error);
    }
  };

  return (
    <div id="progress-bar">
      {sortedEvents.map((event) => {
        const startDate = new Date(event.start_time);
        const endDate = new Date(event.end_time);
        const currentDate = new Date();
        const status = getEventStatus(event);

        return (
          <div key={event.id}>
            <h1>
              {event.name} 
              <Button onClick={() => handleDelete(event.id)} variant="contained" color="secondary">
                Delete
              </Button>
            </h1>
            <p>{event.description}</p>
            <p>
              {/* Display other event details */}
            </p>
            <ProgressBar id={event.id} start_time={event.start_time} end_time={event.end_time} bgcolor="green" height="20px" />
            {event.subevents.length > 0 ? <Subevent subevents={event.subevents} /> : null}
            <SubEventForm subevents={event.subevents} />
          </div>
        );
      })}
    </div>
  );
};

export default Fetch;
