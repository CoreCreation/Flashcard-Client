import React, { useState } from "react";
import useAPI from "../UseAPI";
import Flashcard from "./Flashcard";

export default function FlashcardList() {
    //const [cards, setCards] = useState([{"id":1,"front":"cat", "back":"dog"}]);
    const cards = useAPI();
    
    if(cards.length > 0){
        return (
            <div>
                {
                    cards.map(card => {
                        return (<Flashcard key={card.id} card={card} />);
                    })
                }
            </div>
        );
    } else {
        return (
            <div>
                No cards
            </div>
        )
    }
    
}