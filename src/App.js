import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, NavbarBrand } from "reactstrap";
import { STAFFS, DEPARTMENTS } from "./shared/staffs";
import StaffListComponent from "./components/StaffListComponent";

class App extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            staffs: STAFFS,
            departments: DEPARTMENTS
        }
    };
    render () {
        return (
            <div className="container-fluid">
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand className="p-3 text-light">
                            TRANG QUẢN LÍ NHÂN VIÊN
                        </NavbarBrand>
                    </div>
                </Navbar>
                <StaffListComponent staffs = {this.state.departments && this.state.staffs} />
            </div>
        );
    };
}

export default App;
