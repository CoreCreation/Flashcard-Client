import { useEffect, useState } from "react";

export default function useAPI(){
    const [flashcards, setFlascards] = useState([]);


    useEffect(() => {
        async function getFlashcards() {
            fetch('http://localhost:8080/api/v1/flashcard', {methdo:"GET"}).then((res) => {
                res.json().then(data => setFlascards(data));
            }).catch((error) => {
                console.log(error);
            })
        }
        getFlashcards();
    },[]);
    return flashcards;
}