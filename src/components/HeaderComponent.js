import React from "react";
import { Jumbotron, Navbar, NavbarBrand } from 'reactstrap';

class Header extends React.Component {
    render () {
        return (
            <div>
                <Navbar dark color="primary">
                        <div className="container">
                            <NavbarBrand className="text-warning fs-2">Indian Restaurant</NavbarBrand>
                        </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <h1>Indian Restaurant</h1>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo doloremque velit fugiat repellendus officiis, nobis dolore cumque aliquid odio? Consequuntur.</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </div>
        )
    }
}

export default Header