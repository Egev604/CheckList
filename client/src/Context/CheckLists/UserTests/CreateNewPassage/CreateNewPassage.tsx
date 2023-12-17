import React, { useState } from 'react';
import {Button,  TextField,} from "@mui/material";
import './CreateNewPassage.css'
import CreatePassageApi from "./CreatePassageApi";
import {PassageInterface} from "../UserTests";
import {AxiosResponse} from "axios";
import Cookies from "js-cookie";
export interface PassageItem {
    userId: number;
    modelDevice: string;
    versionOs: string;
}
const CreateNewPassage = () => {
    const [passageItem, setPassageItem] = useState<PassageItem>({
        userId: Number(Cookies.get("userId")),
        modelDevice: '',
        versionOs: '',
    });


    const handleDataItemChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setPassageItem((prevDataItem) => ({ ...prevDataItem, [name]: value }));
        console.log(passageItem)
    };

    const handleAddTreeNode = async () => {
        try {
            const passage = await CreatePassageApi(passageItem);
            console.log(passage)
        } catch (error) {
            console.error('Ошибка при выполнении запроса:', error);
        }
    };
    return (
        <div className="root">
            <label className="inputLabel">
                Model Device:
                <TextField
                    className="inputField"
                    type="text"
                    name="modelDevice"
                    value={passageItem.modelDevice}
                    onChange={handleDataItemChange}
                />
            </label>
            <label className="inputLabel">
                Version OS:
                <TextField
                    className="inputField"
                    type="text"
                    name="versionOs"
                    value={passageItem.versionOs}
                    onChange={handleDataItemChange}
                />
            </label>
            <Button
                className="but"
                variant="contained"
                onClick={handleAddTreeNode}
            >
                Создать
            </Button>
        </div>
    );
};

export default CreateNewPassage;

