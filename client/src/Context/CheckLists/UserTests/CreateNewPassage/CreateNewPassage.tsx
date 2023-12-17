import React, { useState } from 'react';
import {Button,  TextField,} from "@mui/material";
import './CreateNewPassage.css'
import CreatePassageApi from "./CreatePassageApi";
import {PassageInterface} from "../UserTests";
import {AxiosResponse} from "axios";
export interface PassageItem {
    userId: number;
    modelDevice: string;
    versionOs: string;
}
export interface StageItem {
    text: string;
    passed: string;
    children?: StageItem[];
}
const CreateNewPassage = () => {
    const [passageItem, setPassageItem] = useState<PassageItem>({
        userId: 0,
        modelDevice: '',
        versionOs: '',
    });

    const [stageList, setStageList] = useState<StageItem[]>([]);

    const handleDataItemChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setPassageItem((prevDataItem) => ({ ...prevDataItem, [name]: value }));
        console.log(passageItem)
    };

    const handleAddTreeNode = async () => {
        try {
            const passage: AxiosResponse<PassageInterface> = await CreatePassageApi(passageItem);
            const newStage: StageItem = {
                text: `Stage for Passage ${passage.data.id}`,
                passed: '',
                children: [],
            };
            setStageList((prevStages) => [...prevStages, newStage]);
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
            <div>
                {stageList.map((stage, index) => (
                    <div key={index}>
                        <TextField label={`Stage ${index + 1}`} value={stage} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CreateNewPassage;

