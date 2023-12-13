import React, {useEffect, useState} from 'react';
import axios from "axios";
interface requestData {
    token:string | null
}
interface RequestError {
    message: string;
}
const Request = (login:string, passsword:string) => {
    const [token, setToken] = useState<string>("");

    useEffect(() => {
        const apiUrl = '';
        axios.get<requestData>(apiUrl).then((resp) => {
            const allPersons = resp.data;
            if (allPersons.token!=null)
                setToken(allPersons.token);
            else
                return "error";
        });
    }, [setToken]);
    return token;
};

export default Request;