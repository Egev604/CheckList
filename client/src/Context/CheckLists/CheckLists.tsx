import React from 'react';
import {List, ListSubheader} from "@mui/material";
import ListItem from "./ListItem/ListItem";
function CheckLists() {
    const exampleArray = [
        {
            text: 'Item 1',
            children: [
                {
                    text: 'Subitem 1.1',
                    children: [
                        { text: 'Subsubitem 1.1.1' },
                        { text: 'Subsubitem 1.1.2' },
                    ],
                },
                {
                    text: 'Subitem 1.2',
                    children: [{ text: 'Subsubitem 1.2.1' }],
                },
            ],
        },
        {
            text: 'Item 2',
            children: [
                {
                    text: 'Subitem 2.1',
                    children: [{ text: 'Subsubitem 2.1.1' }],
                },
                { text: 'Subitem 2.2' },
            ],
        },
    ];
    return (
        <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                    Nested List Items
                </ListSubheader>
            }
        >
            {exampleArray.map((item, index) => (
                <ListItem key={index} item={item} />
            ))}
        </List>
    );
}

export default CheckLists;