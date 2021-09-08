import React from "react";


export default function Flashcard( { card } ) {
    return (
        <div>
            <p>Flashcard #{card.id}</p>
            Front: {card.front} | Back: {card.back}
        </div>
    );
}