import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Button} from "@mui/material";
import Passage from "./Passage/Passage";
import ModalComponent from "./CreateNewPassage/ModalComponent";
import CreateNewPassage from "./CreateNewPassage/CreateNewPassage";
export interface PassageInterface {
    id: number;
    userId?: number;
    modelDevice?: string;
    versionOs?: string;
}
const UserTests = () => {

    const [data, setData] = useState<PassageInterface[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const axiosData = async () => {
        try {
            const response = await axios.get('http://localhost:4000/api/passage/');
            const result:PassageInterface[] = await response.data;
            setData(result);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    useEffect(() => {
        axiosData();
    }, []);
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h1>Ваши тесты:</h1>
            <Button variant="contained" onClick={openModal}>Создать</Button>
            </div>
            <ModalComponent isOpen={isModalOpen} closeModal={closeModal}>
                <CreateNewPassage />
            </ModalComponent>
            {data.map((item, index) => (
                <div key={item.id} style={{ display: 'flex', alignItems: 'center' }}>
                    <Passage item={item} index={index} />
                </div>
            ))}
        </>
    );
};

export default UserTests;