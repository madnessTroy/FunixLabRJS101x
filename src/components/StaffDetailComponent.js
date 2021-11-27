import "bootstrap/dist/css/bootstrap.min.css";

import dateFormat from "dateformat";

import { Card, CardTitle, CardText } from "reactstrap";
import { Link } from "react-router-dom"


function RenderStaff() {

}

function StaffDetail(staffs, departments) {
    RenderStaffInfo () {
        return (
            <div className="container">
                <div className="row">
                    <div className ="col-4">
                        <Card>
                            <CardImage src={staff.image} />
                        </Card>
                    <div className="col-8">
                        <Card>
                            <CardTitle>Họ và tên: {staff.name}</CardTitle>
                            <CardText>Ngày sinh: {dateFormat({staff.doB}, "dd/mm/yyyy")}</CardText>
                            <CardText>Ngày bắt đầu: {dateFormat({staff.startDate}, "dd/mm/yyyy")}</CardText>
                            <CardText>Phòng ban: {staff.department.name}</CardText>
                            <CardText>Số ngày nghỉ còn lại: {staff.annualLeave}</CardText>
                            <CardText>Số ngày đã làm thêm: {staff.overTime}</CardText>
                        </Card>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default StaffDetail
