import {PassageItem} from "./CreateNewPassage";
import axios from "axios";
import Cookies from "js-cookie";
import {UserProps} from "../../../../ Authorization/ requestAuthorization/request";

interface CreateNewPassageProps {
    passage: PassageItem;
}
const CreatePassageApi = async (passageItem: PassageItem) => {
    try {
        const apiUrl = 'http://localhost:4000/api/users/'+Cookies.get("userId")+'/passage/create';
        const resp = await axios.post(apiUrl, passageItem, {
            headers: {
                'Content-Type': 'application/json',
            }});
        return resp.data.newPassage;
    } catch (error) {
        console.error('Ошибка при отправке запроса:', error);
        throw error;
    }
};

export default CreatePassageApi;
