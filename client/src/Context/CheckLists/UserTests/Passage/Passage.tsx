import React, {useState} from 'react';
import {ListItemButton} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import {DataItem} from "../UserTests";
interface PassageProps {
    item: DataItem;
    index: number;
}
const Passage: React.FC<PassageProps> = ({item,index}) => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <>
            <h1 style={{ marginRight: '10px' }}>{index+1}</h1>
            <div>
                <strong>Model Device:</strong> {item.modelDevice}<br />
                <strong>Version OS:</strong> {item.versionOs}<br />
            </div>
            <ListItemButton onClick={handleClick}>
                {(open ? <ExpandLess /> : <ExpandMore />)}
            </ListItemButton>
        </>
    );
};

export default Passage;