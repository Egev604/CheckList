import React, {useEffect, useState} from 'react';
import axios from "axios";
const Request = (login:string, password:string) => {
    const [token, setToken] = useState<string>("");

    useEffect(() => {
        const apiUrl = '';
        axios.post(apiUrl, {auth: {
                username: login,
                password: password
            }})
            .then((resp) => {
                const allPersons = resp.data;
                setToken(allPersons);
        });
    }, [setToken]);
    return token;
};

export default Request;