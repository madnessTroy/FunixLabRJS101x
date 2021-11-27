import React from 'react'

import { Card, CardTitle, CardText, Breadcrumb, BreadcrumbItem } from "reactstrap"
import { Link } from "react-router-dom"

function RenderSalary({staff}) {
    CalSalary (staff.salaryScale, staff.overTime)
    console.log(CalSalary());
    return (
        <Card className="p-3">
            <CardTitle className="text-center bg-info">{staff.name}</CardTitle>
            <CardText>Mã nhân viên: {staff.id}</CardText>
            <CardText>Hệ số lương: {staff.salaryScale}</CardText>
            <CardText>Số giờ làm thêm: {staff.overTime}</CardText>
            <CardText>Lương: <CalSalary /></CardText>
        </Card>
    )
}

function CalSalary(x, y) {
    let salary = 5000000
    let total = salary * x * y
    //console.log(typeof total);
    return total;
}


function Salary(props) {
    const salaryList = props.staffs.map((staff) => {
        return (
            <div key={staff.id} className="col-lg-4 col-md-6 g-4">
                <RenderSalary staff={staff} />

            </div>
        )
    })

    return (
        <React.Fragment>
            <div className="container-fluid">
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to="/staff">Nhân viên</Link>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        Bảng lương
                    </BreadcrumbItem>
                </Breadcrumb>
            </div>

            <div className="container">
                <div className="row">
                    { salaryList }
                </div>
            </div>
        </React.Fragment>
    )
}

export default Salary
