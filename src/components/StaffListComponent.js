import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"; //bootstrap
import { Card, CardTitle, CardText, NavItem } from "reactstrap"; // reactstrap
import dateFormat from "dateformat"; //dateformat

class StaffListComponent extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            selectedStaff: null
        }
    }

    onStaffSelected(staff) {
        this.setState({selectedStaff: staff})
    }

    renderDepartment (department) {
        if (department == null) {
            return (<div></div>)
        }
        else {
            <div></div>
        }
    }

    renderStaffInfo(staff) {
        if (staff != null) {
            return (
                <div>
                    <Card className= "p-3 m-2">
                        <CardTitle>Họ và tên: {staff.name}</CardTitle>
                        <CardText>Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}</CardText>
                        <CardText>Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}</CardText>
                        <CardText>Phòng ban: {staff.department.name}</CardText>
                        <CardText>Số ngày nghỉ còn: {staff.annualLeave}</CardText>
                        <CardText>Số ngày đã làm thêm: {staff.overTime}</CardText>
                    </Card>
                </div>
            )
        } else {
            return (
                <div className="pt-3">
                    <h3>Hãy chọn 1 nhân viên để xem</h3>
                </div>
            )
        }
    }

    render () {
        const staffList = this.props.staffs.map((staff) => {
            return (
                <div key = "{staff.id}" className="mt-2 col-lg-4 col-md-6">
                    <Card onClick = {() => this.onStaffSelected(staff)}>
                        <CardTitle className="text-center">{staff.name}</CardTitle>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row pt-4">
                    { staffList }
                </div>
                <div className="row mt-5">
                    { this.renderStaffInfo(this.state.selectedStaff) }
                </div>
            </div>
        );
    }
}

export default StaffListComponent
