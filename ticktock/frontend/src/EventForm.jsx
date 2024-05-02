import React, { useState } from 'react';
import { Button, TextField, Container, Typography, Card, CardContent } from '@material-ui/core';
import './App.css'

const EventForm = () => {
  const [eventName, setEventName] = useState('');
  const [description, setDescription] = useState('');
  const [startTime, setStartTime] = useState(new Date().toISOString().slice(0, -8));
  const [endTime, setEndTime] = useState(new Date().toISOString().slice(0, -8));

  const handleSubmit = async (event) => {
    event.preventDefault();
    const eventData = {
      name: eventName,
      description: description,
      start_time: startTime,
      end_time: endTime,
      username // Assuming `username` is defined somewhere in our component
    };

    try {
      const response = await fetch('/users/api/event', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventData),
      });
      const jsonResponse = await response.json();
      console.log('Submit Response:', jsonResponse);
      window.location.reload();
    } catch (error) {
      console.error('Error submitting event:', error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Card>
        <CardContent>
        <Typography variant="h4" align="center" style={{ fontFamily: 'Georgia, Times New Roman, Times, serif', color: '#6DD3CE', fontWeight: 'bold' }}>Create Event</Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              margin="normal"
              label="Event Name"
              value={eventName}
              onChange={e => setEventName(e.target.value)}
              required
            />
            <TextField
              fullWidth
              margin="normal"
              label="Event Description"
              value={description}
              onChange={e => setDescription(e.target.value)}
              required
            />
            <TextField
              fullWidth
              margin="normal"
              label="Start Time"
              type="datetime-local"
              InputLabelProps={{
                shrink: true,
              }}
              value={startTime}
              onChange={e => setStartTime(e.target.value)}
              required
            />
            <TextField
              fullWidth
              margin="normal"
              label="End Time"
              type="datetime-local"
              InputLabelProps={{
                shrink: true,
              }}
              value={endTime}
              onChange={e => setEndTime(e.target.value)}
              required
            />
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', fontFamily: 'Georgia, Times New Roman, Times, serif'}}>
              <Button variant="contained" color="primary" type="submit">
                Submit Event
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default EventForm;
