import { Table, TableBody, TableContainer, TableHead, TableRow } from "@material-ui/core";
import React from "react";
import useAPI from "../UseAPI";
import Flashcard from "./Flashcard";
import FlashcardForm from "./FlashcardForm";

export default function FlashcardList() {
    //const [cards, setCards] = useState([{"id":1,"front":"cat", "back":"dog"}]);
    const [cards, deleteFlashcard, updateFlashcard] = useAPI();

    if (cards.length > 0) {
        return (
            <div>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                cards.map(card => {
                                    return (<Flashcard key={card.id} card={card} deleteCard={deleteFlashcard} updateFlashcard={updateFlashcard} />);
                                })
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
                <FlashcardForm />
            </div>
        );
    } else {
        return (
            <div>
                There seem to be no cards, how interesting. 
            </div>
        )
    }

}