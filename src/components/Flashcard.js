import { IconButton, TableCell, TableRow, TextField } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import _ from "lodash";
import React, { useEffect, useState, useCallback } from "react";

export default function Flashcard({ card, updateFlashcard, deleteCard }) {

    const [front, setFront] = useState(card.front);
    const [back, setBack] = useState(card.back);

    //TODO This needs to be debounced
    const submit = useCallback((front, back) => {
        updateFlashcard(card.id, front, back);
    }, [card.id, updateFlashcard]);

    useEffect(() => {
        submit(front, back);
    }, [front, back, submit])

    return (
        <TableRow>
            <TableCell>
                {card.id}
            </TableCell>
            <TableCell>
                <TextField variant="outlined" value={front} onChange={e => setFront(e.target.value)} />
            </TableCell>
            <TableCell>
                <TextField variant="outlined" value={back} onChange={e => setBack(e.target.value)} />
            </TableCell>
            <TableCell align="right">
                <IconButton aria-label="delete" onClick={() => deleteCard(card.id)}>
                    <DeleteIcon />
                </IconButton>
            </TableCell>
        </TableRow>
    );
}