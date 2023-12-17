import React, {useState} from 'react';
import {ListItemButton} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Tests from "../Tests/Tests";
import {PassageInterface} from "../UserTests";
interface PassageProps {
    item: PassageInterface;
    index: number;
}
const Passage: React.FC<PassageProps> = ({item,index}) => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <>
            <div>
                <h1>{index+1}</h1>
                <strong>Model Device:</strong> {item.modelDevice}<br />
                <strong>Version OS:</strong> {item.versionOs}<br />
            </div>
            <ListItemButton onClick={handleClick}>
                {(open ? <ExpandLess /> : <ExpandMore />)}
            </ListItemButton>
            {open && <Tests passageId={item.id} />}
        </>
    );
};

export default Passage;