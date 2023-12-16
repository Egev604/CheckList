import React, {useEffect, useState} from 'react';
import axios from "axios";
const Request = async (login: string, password: string) => {
    const body = {
        login: login,
        password: password
    };
    try {
        const apiUrl = 'http://localhost:4000/api/auth/login/';
        const resp = await axios.post(apiUrl, body, {
            headers: {
                'Content-Type': 'application/json',
            }});

        const token = resp.data.accessToken;
        return token;
    } catch (error) {
        console.error('Error during login:', error);
        return "error"
    }
};

export default Request;