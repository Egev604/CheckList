import React, {useEffect, useState} from 'react';
import axios from "axios";
const Request = (login:string, passsword:string) => {
    const [token, setToken] = useState<string>("");

    useEffect(() => {
        const apiUrl = '';
        axios.get(apiUrl).then((resp) => {
            const allPersons = resp.data;
            setToken(allPersons);
        });
    }, [setToken]);
    return token;
};

export default Request;