import React, {useEffect, useState} from 'react';
import {List, ListSubheader} from "@mui/material";
import ListItem, {ListItemProps} from "./ListItem/ListItem";
import axios from "axios";
import Cookies from "js-cookie";
export interface TreeNode {
    name: string;
    passed?: string;
    children?: TreeNode[];
}
const Tests:React.FC<{ passageId: number }> = ({ passageId }) => {
    const [testsModel, setTestsModel] = useState<TreeNode[]>([]);
    const axiosData = async () => {
        try {
            const response = await axios.get('http://localhost:4000/api/users/'+Cookies.get("userId")+'/passage/'+passageId+'/stage');
            const result:TreeNode[] = await response.data.data.stages;
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
