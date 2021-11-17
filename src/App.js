import React, {Component} from 'react'
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from "./components/MenuComponent";

function App() {
  return (
    <div className="App">
        <Navbar dark color="primary">
            <div className="container">
                <NavbarBrand className="text-warning fs-2">Indian Restaurant</NavbarBrand>
            </div>
        </Navbar>
        <Menu />
    </div>
  );
}

export default App;
