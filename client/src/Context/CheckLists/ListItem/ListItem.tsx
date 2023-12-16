import React, {useState} from 'react';
import {Checkbox, Collapse, FormControlLabel, List, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
interface ListItemProps {
    item: {
        text: string
        passed:boolean
        children?: ListItemProps['item'][]
    };
}
const ListItem: React.FC<ListItemProps> = ({item}) => {
    const [open, setOpen] = useState(false);
    const [passed, setPassed] = useState(item.passed || false);
    const [notPassed, setNotPassed] = useState(false);
    const handleClick = () => {
        setOpen(!open);
    };
    const hasChildren = item.children && item.children.length > 0;
    const isLeafNode = !hasChildren;
    const handlePassedChange = () => {
        setPassed(!passed);
        if (!passed) {
            setNotPassed(false);
        }
    };

    const handleNotPassedChange = () => {
        setNotPassed(!notPassed);
        if (!notPassed) {
            setPassed(false);
        }
    };
    return (
        <>
            <ListItemButton onClick={handleClick}>
                <ListItemText primary={item.text} />
                {isLeafNode && (
                    <>
                        <FormControlLabel
                            control={<Checkbox checked={passed} onChange={handlePassedChange} />}
                            label="Прошел"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={notPassed} onChange={handleNotPassedChange} />}
                            label="Нет"
                        />
                    </>
                )}
                {hasChildren && (open ? <ExpandLess /> : <ExpandMore />)}
            </ListItemButton>
            {hasChildren && (
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {item.children?.map((child, index) => (
                            <ListItem key={index} item={child} />
                        ))}
                    </List>
                </Collapse>
            )}
        </>
    );
};

export default ListItem;