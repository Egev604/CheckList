import {PassageItem} from "./CreateNewPassage";
import axios from "axios";

interface CreateNewPassageProps {
    passage: PassageItem;
}
const CreatePassageApi = async (passageItem: PassageItem) => {
    try {
        const apiUrl = '';
        return await axios.post(apiUrl, passageItem);
    } catch (error) {
        console.error('Ошибка при отправке запроса:', error);
        throw error;
    }
};

export default CreatePassageApi;
