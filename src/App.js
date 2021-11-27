import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"

import { BrowserRouter } from "react-router-dom";

import Main from "./components/MainComponent"

class App extends React.Component{
    render () {
        return (
            <BrowserRouter>
                <div>
                    <Main />
                </div>
            </BrowserRouter>
        );
    };
}

export default App;
