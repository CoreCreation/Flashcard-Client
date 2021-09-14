import { useEffect, useState } from "react";

export default function useAPI() {
    const [flashcards, setFlashcards] = useState([]);

    async function deleteFlashcard(id) {
        console.log("Trying to delete card #" + id);
        fetch("http://localhost:8080/api/v1/flashcard/" + id, {
            method: "DELETE"
        }).then((res) => {
            //Delete the card from local so that it doesn't need to download the entire deck again
            setFlashcards(prevFlashcards => {
                return prevFlashcards.filter(card => card.id !== id);
            });
        }).catch((error) => alert(error));
    }

    async function updateFlashcard(id, front, back) {
        console.log("Trying to update card #" + id);
        fetch("http://localhost:8080/api/v1/flashcard/" + id, {
            method: "PUT",
            body: JSON.stringify({
                id: id,
                front: front,
                back: back
              }),
              headers: {
                "Content-Type": "application/json; charset=UTF-8"
              }
        }).then(res => {
            console.log("saved #" + id);
        }).catch(error => {
            alert(error);
        });
    }

    useEffect(() => {
        async function getFlashcards() {
            fetch('http://localhost:8080/api/v1/flashcard', { methdo: "GET" }).then((res) => {
                res.json().then(data => setFlashcards(data));
            }).catch((error) => {
                console.log(error);
            })
        }
        getFlashcards();
    }, []);
    return [flashcards, deleteFlashcard, updateFlashcard];
}