import React from "react"

import { Nav, Navbar, NavbarBrand, NavItem, NavLink, NavbarToggler, Collapse } from "reactstrap"
import { Link } from "react-router-dom"

import "font-awesome/css/font-awesome.min.css"
import "bootstrap/dist/css/bootstrap.min.css"

class Header extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isNavOpen: false
        }

        this.toggleNav = this.toggleNav.bind(this)
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }

    render() {
        return (
            <React.Fragment>
                <Navbar expand="md" className="bg-info" dark>
                    <div className="container-fluid header">

                        <NavbarToggler onClick={this.toggleNav} />

                            <NavbarBrand>
                                <img src="assets/images/logo.png" alt="logo" width="100%" />
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
                                        <h3 className="fa fa-address-card"></h3>Phòng ban
                                    </Link>
                                </NavItem>

                                <NavItem>
                                    <Link to="/salary">
                                        <h3 className="fa fa-money"></h3>Bảng lương
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
