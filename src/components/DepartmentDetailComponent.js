import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, Card, CardImg, CardTitle, CardText } from "reactstrap";

function RenderStaff({ staff }) {
	return (
		<Card key={staff.id} className="col-lg-2 col-md-3 col-sm-6 ml-2">
			<Link to={`/staffs/${staff.id}`}>
				<CardImg src={staff.image} width="100%" />
				<CardTitle className="text-center">{staff.name}</CardTitle>
			</Link>
		</Card>
	);
}

function RenderStaffDept({ staffs, department }) {
	var staffsOfDepartment = staffs.filter((data) => data.departmentId === department.id);
	return staffsOfDepartment.map((d) => <RenderStaff staff={d} />);
}

function DepartmentDetail(props) {
	return (
		<React.Fragment>
			<div className="container-fluid">
				<Breadcrumb className="pt-3">
					<BreadcrumbItem>
						<Link to="/departments">Phòng ban</Link>
					</BreadcrumbItem>
					<BreadcrumbItem>
						<b>{props.department.name}</b>
					</BreadcrumbItem>
				</Breadcrumb>

				<hr />

				<div className="row">
					<RenderStaffDept staffs={props.staffs} department={props.department} />
				</div>
			</div>
		</React.Fragment>
	);
}

export default DepartmentDetail;
