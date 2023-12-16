import React, {useEffect, useState} from 'react';
import './App.css';
import NavigationView from "./NavigationView/NavigationView";
import RoutsContext from "./NavigationView/Routs/RoutsContext";
import {BrowserRouter as Router} from "react-router-dom";
import Authorization from "./ Authorization/Authorization";
import Cookies from "js-cookie";

function App() {
    //Cookies.remove("authToken")
    const [loggedIn, setLoggedIn] = useState<boolean>(false);
    useEffect(() => {
        const authToken = Cookies.get("authToken");
        if (authToken !== undefined && authToken !== null) {
            setLoggedIn(true);
        }
    }, []);
        return (
            <>
                <Router>
                    {loggedIn ? (
                        <div className="Containter">
                            <div>
                                <NavigationView />
                            </div>
                            <div className="content">
                                <RoutsContext />
                            </div>
                        </div>
                    ) : (
                        <Authorization onLogin={() => setLoggedIn(true)} />
                    )}
                </Router>
            </>
        );
}

export default App;
