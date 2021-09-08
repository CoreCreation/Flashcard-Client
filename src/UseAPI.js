import axios from "axios";
import { useEffect, useState } from "react";

export default function useAPI(){
    const [flashcards, setFlascards] = useState([]);


    useEffect(() => {
        async function getFlashcards() {
            axios.get("http://localhost:8080/api/v1/flashcard").then((res) => {
                setFlascards(res.data);
            }).catch((error) => {
                console.log(error);
            })
        }
        getFlashcards();
    },[]);
    return flashcards;
}