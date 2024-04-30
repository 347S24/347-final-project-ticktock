import React, { useState, useEffect } from 'react';
import ProgressBar from './ProgressBar';
import Subevent from './Subevent';
import SubEventForm from './SubEventForm';
import { Button, Card, CardContent, Typography } from '@material-ui/core';
import './index.css' 

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

  const handleDelete = async (eventId) => {
    try {
      const response = await fetch(`/users/api/event/${eventId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
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
      {events.map((event) => {
        const startDate = new Date(event.start_time);
        const endDate = new Date(event.end_time);
        const currentDate = new Date();
        const status = getEventStatus(event);

        return (
          <Card key={event.id} style={{ marginBottom: '20px' }}>
            <CardContent>
              <Typography variant="h5" component="h2">
                {event.name}
              </Typography>
              <Typography variant="body1">
                {event.description}
              </Typography>
              <Typography variant="body2">
                <strong>Start Date:</strong> {startDate.toLocaleString()}
              </Typography>
              <Typography variant="body2">
                <strong>Current Date:</strong> {currentDate.toLocaleString()}
              </Typography>
              <Typography variant="body2">
                <strong>End Date:</strong> {endDate.toLocaleString()}
              </Typography>
              {status === 'startingSoon' && <Typography variant="body2">Status: Starting Soon...</Typography>}
              {status === 'ongoing' && <Typography variant="body2">Status: Ongoing</Typography>}
              {status === 'finished' && <Typography variant="body2">Status: Finished!</Typography>}
              <ProgressBar id={event.id} start_time={event.start_time} end_time={event.end_time} bgcolor="green" height="20px" />
              {event.subevents.length > 0 && <Subevent subevents={event.subevents} />}
              <SubEventForm subevents={event.subevents} />
              <Button onClick={() => handleDelete(event.id)} variant="contained" color="secondary">
                Delete
              </Button>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default Fetch;
