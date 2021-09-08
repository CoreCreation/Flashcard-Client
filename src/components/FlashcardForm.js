import axios from 'axios';
import React, { useState } from 'react';

export default function FlashcardForm() {

    const [front, setFront] = useState("front");
    const [back, setBack] = useState("back");

    function handleSubmit() {
        axios.post('localhost:8080/api/v1/flashcard', {
            front: front,
            back: back
        }).catch(error => {
            alert(error);
        })
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