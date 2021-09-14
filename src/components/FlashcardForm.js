import { Button, Container, Typography } from '@material-ui/core';
import React, { useState } from 'react';

export default function FlashcardForm() {
  //TODO This needs to be removed and turned into a button that adds a blank card
  //TODO the blank card should save itself ONLY after information has been entered

  const [front, setFront] = useState("front");
  const [back, setBack] = useState("back");

  async function handleSubmit() {
    fetch('http://localhost:8080/api/v1/flashcard', {
      method: "POST",
      body: JSON.stringify({
        front: front,
        back: back
      }),
      headers: {
        "Content-Type": "application/json; charset=UTF-8"
      }
    });
  }

  return (
    <Container>
      <Typography variant="h6">Add a new Card</Typography>
      <form>
        <label>Front:
                <input type="text" value={front} onChange={e => setFront(e.target.value)} />
        </label>
        <label>
          Back:
                <input type="text" value={back} onChange={e => setBack(e.target.value)} />
        </label>
        <Button variant="contained" color="secondary" onClick={handleSubmit}>Save</Button>
      </form>
    </Container >
  );
}