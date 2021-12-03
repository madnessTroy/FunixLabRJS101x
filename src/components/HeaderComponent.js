import React from "react"

import { Nav, Navbar, NavbarBrand, NavItem, NavbarToggler, Collapse } from "reactstrap"
import { Link } from "react-router-dom"

import "font-awesome/css/font-awesome.min.css"
import "bootstrap/dist/css/bootstrap.min.css"

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          isNavOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }

    render() {
        return (
            <React.Fragment>
                <Navbar expand="md" className="bg-info" dark>
                    <div className="container-fluid header">
                        <NavbarToggler onClick={this.toggleNav} className="bg-danger" />

                        <NavbarBrand className="mr-auto">
                            <img src="assets/images/logo.png" alt="logo" height="70" width="100" />
                        </NavbarBrand>

                        <Collapse isOpen={this.state.isNavOpen} navbar>

                            <Nav navbar>
                                <NavItem>
                                    <Link to="/staff">
                                        <span className="fa fa-users"></span>Nhân viên
                                    </Link>
                                </NavItem>

                                <NavItem>
                                    <Link to="/department">
                                        <span className="fa fa-address-card"></span>Phòng ban
                                    </Link>
                                </NavItem>

                                <NavItem>
                                    <Link to="/salary">
                                        <span className="fa fa-money"></span>Bảng lương
                                    </Link>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </React.Fragment >
        )
    }
}

export default Header
