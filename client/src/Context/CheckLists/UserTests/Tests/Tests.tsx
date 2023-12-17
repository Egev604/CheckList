import React, {useEffect, useState} from 'react';
import {List, ListSubheader} from "@mui/material";
import ListItem from "./ListItem/ListItem";
import axios from "axios";
export interface TreeNode {
    text: string;
    passed: string;
    children?: TreeNode[];
}
const Tests:React.FC<{ stage: number }> = ({ stage }) => {
    const [testsModel, setTestsModel] = useState<TreeNode[]>([]);
    const axiosData = async () => {
        try {
            const response = await axios.get('http://localhost:4000/api/'+stage);
            const result:TreeNode[] = await response.data;
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
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                        Nested List Items
                    </ListSubheader>
                }
            >
                {testsModel.map((item, index) => (
                    <ListItem key={index} item={item} />
                ))}
            </List>
        </div>
    );
};

export default Tests;