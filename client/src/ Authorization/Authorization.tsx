import React, {useState} from 'react';
import {Button, TextField} from "@mui/material";
import './Authorization.css'
import Request, {UserProps} from "./ requestAuthorization/request";
import Cookies from "js-cookie";
interface AuthorizationProps {
    onLogin: () => void;
}
export interface resultResponse {
    token:string
    user:UserProps|null
}
const Authorization: React.FC<AuthorizationProps> = (props) => {
    const [login,  setLogin] = useState<string>("")
    const [password,  setPassword] = useState<string>("")
    const [error, setError] = useState<string | null>(null);
    const handleLogin =  async () => {
        try {
            const {token, user} = await Request(login, password);
            if (token !== "" && token !== "error") {
                props.onLogin();
                const expirationMinutes = 5;
                const expirationDate = new Date(new Date().getTime() + expirationMinutes * 60 * 1000);
                Cookies.set('authToken', token, { expires: expirationDate });
                Cookies.set('userId', user?.id+"")
            } else {
                setError("Ошибка авторизации: неверный логин или пароль");
            }
        } catch (error) {
            setError("Произошла ошибка при авторизации");
        }
        clearTextField();

    };
    const clearTextField = () =>{
        setLogin("")
        setPassword("")
    }
    return (
        <>
            <div className="mainBlock">
                <h1>Вход</h1>
                <TextField id="outlined-basic" label="Login" variant="outlined" value={login} onChange={(e) => setLogin(e.target.value)}/>
                <TextField id="outlined-basic" label="password" variant="outlined" value={password} onChange={(e) => setPassword(e.target.value)} />
                <Button variant="contained" onClick={handleLogin}>Login</Button>
                {error && <p style={{ color: "red" }}>{error}</p>}
            </div>
        </>
    );
};

export default Authorization;