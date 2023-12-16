import React from 'react';
import {List, ListSubheader} from "@mui/material";
import ListItem from "./ListItem/ListItem";
function CheckLists() {
    const exampleArray = [
        {
            text: 'Элемент 1',
            passed: false, // Добавьте это свойство для управления состоянием флажка
            children: [
                {
                    text: 'Подэлемент 1.1',
                    passed: false,
                    children: [
                        { text: 'Подподэлемент 1.1.1', passed: false },
                        { text: 'Подподэлемент 1.1.2', passed: false },
                    ],
                },
                {
                    text: 'Подэлемент 1.2',
                    passed: false,
                    children: [{ text: 'Подподэлемент 1.2.1', passed: false }],
                },
            ],
        },
        {
            text: 'Элемент 2',
            passed: false,
            children: [
                {
                    text: 'Подэлемент 2.1',
                    passed: false,
                    children: [{ text: 'Подподэлемент 2.1.1', passed: false }],
                },
                { text: 'Подэлемент 2.2', passed: false },
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