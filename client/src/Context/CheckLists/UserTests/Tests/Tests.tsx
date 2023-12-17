import React, {useEffect, useState} from 'react';
import {List, ListSubheader} from "@mui/material";
import ListItem from "./ListItem/ListItem";
import axios from "axios";
import {DataItem} from "../UserTests";
export interface TreeNode {
    name: string;
    passed?: string;
    children?: TreeNode[];
}
const Tests:React.FC<{ passageId: number }> = ({ passageId }) => {
    const [testsModel, setTestsModel] = useState<TreeNode[]>([]);
    const axiosData = async () => {
        try {
            const response = await axios.get('http://localhost:4000/api/passage/'+passageId+'/stage');
            const result:TreeNode[] = await response.data.passages;
            setTestsModel(result);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    useEffect(() => {
        axiosData();
    }, []);
    return (
        <div>
            <List
                sx={{ width: '100%', bgcolor: 'background.paper' }}
                component="nav"
                aria-labelledby="nested-list-subheader"
            >
                {testsModel.map((item, index) => (
                    <ListItem key={index} item={item} />
                ))}
            </List>
        </div>
    );
};

export default Tests;