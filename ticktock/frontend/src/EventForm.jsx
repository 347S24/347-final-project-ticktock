import { Button, TextField, Container, Typography } from '@material-ui/core';
import React, { useState } from 'react';

const EventForm = () => {
  // your state and handleSubmit function...
  // State for event form
  const [eventName, setEventName] = useState('');
  const [description, setDescription] = useState('');
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());

  // State for a counter (from the first version of App)
  const [count, setCount] = useState(0);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const eventData = {
      name: eventName,
      description: description,
      start_time: startTime,
      end_time: endTime,
      username
    };

    // Posting data to the backend
    try {
      console.log(JSON.stringify(eventData))
      const response = await fetch('/users/api/event', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventData),
      });
      const jsonResponse = await response.json();
      console.log('Submit Response:', jsonResponse);
      // Force a refresh of the page
      window.location.reload();
      // Optionally reset the form or handle the UI changes post submission
    } catch (error) {
      console.error('Error submitting event:', error);
    }
  };
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center">Submit Event</Typography>
      <form onSubmit={handleSubmit}>
      <h1>Create Event</h1>
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
          label="Description"
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
        <Button variant="contained" color="primary" type="submit">
          Submit Event
        </Button>
      </form>
    </Container>
  );
};

export default EventForm;