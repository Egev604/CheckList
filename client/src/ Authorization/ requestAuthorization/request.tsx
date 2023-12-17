import React from 'react';
import axios from "axios";
import {resultResponse} from "../Authorization";

export interface UserProps {
    id:number
    login:string
    password:string
}
const Request = async (login: string, password: string):Promise<resultResponse> => {
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

        const token = resp.data.accessToken
        const user:UserProps = resp.data.user
        console.log(user, token)
        return {
            token: token,
            user: user
        };
    } catch (error) {
        console.error('Error during login:', error);
        return {
            token:"error",
            user:null
        }
    }
};

export default Request;