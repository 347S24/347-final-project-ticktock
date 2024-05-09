import React, { useState, useEffect } from 'react';
import ProgressBar from './ProgressBar';
import Subevent from './Subevent';
import SubEventForm from './SubEventForm';
import { Button, Card, CardContent, Typography } from '@material-ui/core';
import './App.css'

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
    eventId = String(eventId); // Convert eventId to string
    console.log(eventId);
    try {
      const response = await fetch(`/users/api/event/${eventId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      // Handle response
    } catch (error) {
      console.error('Error deleting event:', error);
    }
  };
  
  

  return (
    <div id="progress-bar">
      {events.map((event, i) => {
        const startDate = new Date(event.start_time);
        console.log(event)
        const endDate = new Date(event.end_time);
        const currentDate = new Date();
        const status = getEventStatus(event);

        return (
          <Card key={event.id} className="card">
            <CardContent className="cardContent">
              <Typography variant="h5" component="h2" className="cardTitle">
                {event.name}
              </Typography>
              <Typography variant="body1" className="cardDescription">
                {event.description}
              </Typography>
              <div className="cardDetails">
                <Typography variant="body2">
                  <strong>Start Date:</strong> {startDate.toLocaleString()}
                </Typography>
                <Typography variant="body2">
                  <strong>End Date:</strong> {endDate.toLocaleString()}
                </Typography>
              </div>
              <Typography variant="body2" className="cardStatus">
                <strong>Status:</strong> {status === 'startingSoon' ? 'Starting Soon...' : status === 'ongoing' ? 'Ongoing' : 'Finished!'}
              </Typography>
              <ProgressBar id={event.id} start_time={event.start_time} end_time={event.end_time} bgcolor="#6DD3CE" height="20px" />
              {/* <Subevent subevents={event.subevents} />
              <SubEventForm subevents={event.subevents} /> */}
              <Button onClick={() => handleDelete(event.id) && setEvents(events.toSpliced(i, 1))} variant="contained" color="secondary">
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

