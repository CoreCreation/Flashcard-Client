import React, { useState } from 'react';

export default function FlashcardForm() {

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
        <form>
            <label>Front:
                <input type="text" value={front} onChange={e => setFront(e.target.value)} />
            </label>
            <label>
                Back:
                <input type="text" value={back} onChange={e => setBack(e.target.value)} />
            </label>
            <button onClick={handleSubmit}>Save</button>
        </form>
    );
}