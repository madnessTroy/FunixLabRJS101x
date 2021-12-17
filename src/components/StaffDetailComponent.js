// General
import React from "react";
import dateFormat from "dateformat";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";

import UpdateStaffModal from "./UpdateStaffModalComponent";
import DeleteStaffModal from "./DeleteStaffModalComponent";

function RenderStaff({ staff, departments }) {
	let departmentName = "";
	departments.map((department) => {
		if (staff.departmentId === department.id) {
			departmentName = department.name;
		}
	});
	return (
		<React.Fragment>
			<div className="col-4">
				<img src={staff.image} alt={staff.name} width="100%" />
			</div>

			<div className="col-8">
				<h4>{staff.name}</h4>
				<p>Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}</p>
				<p>Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}</p>
				<p>Phòng ban: {departmentName}</p>
				<p>Số ngày nghỉ còn lại: {staff.annualLeave}</p>
				<p>Số ngày đã làm thêm: {staff.overTime}</p>
			</div>
		</React.Fragment>
	);
}

function StaffDetail(props) {
	const staff = props.staff;
	const departments = props.departments;

	if (staff == null) {
		return <div></div>;
	} else {
		return (
			<React.Fragment>
				<div className="container-fluid">
					<Breadcrumb className="pt-3">
						<BreadcrumbItem>
							<Link to="/staffs">Nhân viên</Link>
						</BreadcrumbItem>

						<BreadcrumbItem>
							<b>{staff.name}</b>
						</BreadcrumbItem>
					</Breadcrumb>
				</div>

				<hr />

				<div className="container">
					<div className="row">
						<RenderStaff staff={staff} departments={departments} />
					</div>
				</div>
				<div className="container mt-3">
					<div className="row">
						<div className="col-2">
							<UpdateStaffModal
								staff={staff}
								patchStaff={props.patchStaff}
								resetAddStaffModal={props.resetAddStaffModal}
							/>
						</div>
						<div className="col-2">
							<DeleteStaffModal deletedStaff={props.deletedStaff} staff={staff} />
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default StaffDetail;
