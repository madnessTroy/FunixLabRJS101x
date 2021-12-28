import React from "react";

import { Card, CardTitle, CardText } from "reactstrap";

function RenderDepartment({ department }) {
	return (
		<Card>
			<CardTitle className="p-2">
				<h2>{department.name}</h2>
			</CardTitle>
			<CardText className="p-3">
				<span>Số lượng nhân viên: {department.numberOfStaff}</span>
			</CardText>
		</Card>
	);
}

function Department(props) {
	const departmentList = props.departments.map((department) => {
		return (
			<div key={department.id} className="col-lg-4 col-md-6 g-5">
				<RenderDepartment department={department} />
			</div>
		);
	});

	return (
		<React.Fragment>
			<div className="containter-fluid">
				<div className="row p-3">
					<h3>PHÒNG BAN</h3>
					<hr />
				</div>
			</div>

			<div className="container">
				<div className="row">{departmentList}</div>
			</div>
		</React.Fragment>
	);
}

export default Department;
