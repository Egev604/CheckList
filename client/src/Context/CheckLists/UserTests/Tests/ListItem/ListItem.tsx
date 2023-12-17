import React, {useState} from 'react';
import {Checkbox, Collapse, FormControlLabel, List, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
export interface ListItemProps {
    item: {
        name: string
        passed?:string
        children?: ListItemProps['item'][]
    };
    level?: number;
}
const ListItem: React.FC<ListItemProps> = ({item, level = 0 }) => {
    const [open, setOpen] = useState(false);
    const [notPassed, setNotPassed] = useState(false);
    const handleClick = () => {
        setOpen(!open);
    };
    const hasChildren = item.children && item.children.length > 0;
    const isLeafNode = !hasChildren;

    return (
        <>
            <ListItemButton
                style={{ paddingLeft: level * 35 }}
                onClick={handleClick}>
                <ListItemText primary={item.name} />
                {isLeafNode && (
                    <>
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Пройден"
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Не пройден"
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Невозможно пройти"
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Пропущен"
                        />
                    </>
                )}
                {hasChildren && (open ? <ExpandLess /> : <ExpandMore />)}
            </ListItemButton>
            {hasChildren && item.children && (
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {item.children?.map((child, index) => (
                            <ListItem key={index} item={child} level={level + 1} />
                        ))}
                    </List>
                </Collapse>
            )}
        </>
    );
};

export default ListItem;