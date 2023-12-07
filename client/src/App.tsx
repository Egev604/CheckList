import React from 'react';
import './App.css';
import NavigationView from "./NavigationView/NavigationView";
import RoutsContext from "./NavigationView/Routs/RoutsContext";
import {BrowserRouter as Router} from "react-router-dom";

function App() {
    return (
        <>
            <Router>
                <div className="Containter">
                    <NavigationView></NavigationView>
                    <div className="content">
                        <RoutsContext></RoutsContext>
                    </div>
                </div>
            </Router>
        </>
    );
}

export default App;
