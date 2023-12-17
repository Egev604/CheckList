import React, {useEffect, useState} from 'react';
import axios from "axios";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import {Button, List, ListItemButton} from "@mui/material";
import Passage from "./Passage/Passage";
export interface DataItem {
    id: number;
    userId?: number;
    modelDevice?: string;
    versionOs?: string;
    stageId:number;
}
const UserTests = () => {

    const [data, setData] = useState<DataItem[]>([]);

    const axiosData = async () => {
        try {
            const response = await axios.get('http://localhost:4000/api/passage/');
            const result:DataItem[] = await response.data.passages;
            setData(result);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    useEffect(() => {
        axiosData();
    }, []);
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h1>Ваши тесты:</h1>
                <Button>Создать</Button>
            </div>

            <List
                sx={{ width: '100%', bgcolor: 'background.paper' }}
                component="nav"
                aria-labelledby="nested-list-subheader"
            >
            {data.map((item, index) => (
                    <Passage key = {item.id} item={item} index={index} />
            ))}
            </List>
        </>
    );
};

export default UserTests;