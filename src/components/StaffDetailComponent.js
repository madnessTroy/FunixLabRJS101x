import "bootstrap/dist/css/bootstrap.min.css";

import dateFormat from "dateformat";

import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
import React from "react";

function RenderStaff({ staff }) {
	return (
		<React.Fragment>
			<div className="col-4">
				<img src={staff.image} alt={staff.name} width="100%" />
			</div>

			<div className="col-8">
				<h4>{staff.name}</h4>
				<p>Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}</p>
				<p>Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}</p>
				<p>Phòng ban: {staff.department.name}</p>
				<p>Số ngày nghỉ còn lại: {staff.annualLeave}</p>
				<p>Số ngày đã làm thêm: {staff.overTime}</p>
			</div>
		</React.Fragment>
	);
}

function StaffDetail(props) {
	const staff = props.staff;

	if (staff == null) {
		return <div></div>;
	} else {
		return (
			<React.Fragment>
				<div className="container-fluid">
					<Breadcrumb className="pt-3">
						<BreadcrumbItem>
							<Link to="/staff">Nhân viên</Link>
						</BreadcrumbItem>

						<BreadcrumbItem>
							<b>{props.staff.name}</b>
						</BreadcrumbItem>
					</Breadcrumb>
				</div>

				<hr />

				<div className="container">
					<div className="row">
						<RenderStaff staff={props.staff} />
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default StaffDetail;
