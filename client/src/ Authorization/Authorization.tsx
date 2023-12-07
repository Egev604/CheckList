import React, {useState} from 'react';
import {Button, TextField} from "@mui/material";
import './Authorization.css'
interface AuthorizationProps {
    onLogin: () => void;
}
const Authorization: React.FC<AuthorizationProps> = (props) => {
    const [login,  setLogin] = useState<string>("")
    const [password,  setPassword] = useState<string>("")
    const handleLogin = () => {
        // После успешной авторизации вызываем функцию обновления состояния в App
        props.onLogin();
        // Другая логика после успешной авторизации
    };
    return (
        <>
            <div className="mainBlock">
                <h1>Вход</h1>
                <TextField id="outlined-basic" label="Login" variant="outlined" value={login} onChange={(e) => setLogin(e.target.value)}/>
                <TextField id="outlined-basic" label="password" variant="outlined" value={password} onChange={(e) => setPassword(e.target.value)} />
                <Button variant="contained" onClick={handleLogin}>Login</Button>
            </div>
        </>
    );
};

export default Authorization;