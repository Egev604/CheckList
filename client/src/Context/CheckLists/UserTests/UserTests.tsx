import React, {useEffect, useState} from 'react';
import axios from "axios";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import {ListItemButton} from "@mui/material";
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
            const response = await axios.get('http://localhost:4000/api/');
            const result:DataItem[] = await response.data;
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
            <h1>Ваши тесты:</h1>
            {data.map((item, index) => (
                <div key={item.id} style={{ display: 'flex', alignItems: 'center' }}>
                    <Passage item={item} index={index} />
                </div>
            ))}
        </>
    );
};

export default UserTests;