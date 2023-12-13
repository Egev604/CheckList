import React, {useState} from 'react';
import './App.css';
import NavigationView from "./NavigationView/NavigationView";
import RoutsContext from "./NavigationView/Routs/RoutsContext";
import {BrowserRouter as Router} from "react-router-dom";
import Authorization from "./ Authorization/Authorization";
import Cookies from "js-cookie";

function App() {
    const [loggedIn, setLoggedIn] = useState<boolean>(false);
    const authToken = Cookies.get('authToken');
    if (authToken) {
        setLoggedIn(true);
    }
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
