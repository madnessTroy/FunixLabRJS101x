import React from "react";

import { Card, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";

import { Loading } from "./LoadingComponent";

function RenderDepartment({ department }) {
	return (
		<Card className="m-2">
			<Link to={`/departments/${department.id}`}>
				<CardTitle className="p-2">
					<h2>{department.name}</h2>
				</CardTitle>
			</Link>
			<p className="p-3">
				<span>Số lượng nhân viên: {department.numberOfStaff}</span>
			</p>
		</Card>
	);
}

class Department extends React.Component {
	render() {
		if (this.props.departmentsLoading) {
			return <Loading />;
			// Handle loading fail
		} else if (this.props.departmentsErrMsg) {
			return <h3>{this.props.departmentsErrMsg}</h3>;
		}

		const DepartmentList = this.props.departments.map((department) => {
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
					</div>
				</div>
				<hr />
				<div className="container">
					<div className="row">{DepartmentList}</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Department;
