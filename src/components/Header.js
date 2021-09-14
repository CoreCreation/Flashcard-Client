import React from 'react';
import { AppBar, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

export default function Header() {

    return (
        <header>
            <AppBar position="static">
                <toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    Flashcards
                </toolbar>
            </AppBar>
        </header >
    );
}