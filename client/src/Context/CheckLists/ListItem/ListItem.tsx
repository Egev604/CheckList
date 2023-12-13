import React, {useState} from 'react';
import {Collapse, List, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
interface ListItemProps {
    item: {
        text: string;
        children?: ListItemProps['item'][];
    };
}
const ListItem: React.FC<ListItemProps> = ({item}) => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <>
            <ListItemButton onClick={handleClick}>
                <ListItemText primary={item.text} />
                {item.children && (open ? <ExpandLess /> : <ExpandMore />)}
            </ListItemButton>
            {item.children && (
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {item.children.map((child, index) => (
                            <ListItem key={index} item={child} />
                        ))}
                    </List>
                </Collapse>
            )}
        </>
    );
};

export default ListItem;