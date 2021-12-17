import React from "react";

import { Card, CardTitle, CardText, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";

import { Loading } from "./LoadingComponent";

function RenderSalary({ staff }) {
	return (
		<Card className="p-3 m-2">
			<Link to={`/staffs/${staff.id}`}>
				<CardTitle className="text-center bg-info text-white">{staff.name}</CardTitle>
			</Link>
			<CardText>Mã nhân viên: {staff.id}</CardText>
			<CardText>Hệ số lương: {staff.salaryScale}</CardText>
			<CardText>Số giờ làm thêm: {staff.overTime}</CardText>
			<CardText>Lương: {staff.salary}</CardText>
		</Card>
	);
}

function Salary(props) {
	const salaryList = props.staffsSalary.map((d) => {
		return (
			<div key={d.id} className="col-lg-4 col-md-6 g-4">
				<RenderSalary staff={d} />
			</div>
		);
	});

	if (props.salaryLoading) {
		return <Loading />;
	} else if (props.salaryFailed) {
		return <h3>{props.salaryErrMsg}</h3>;
	} else
		return (
			<React.Fragment>
				<div className="container-fluid">
					<Breadcrumb className="pt-3">
						<BreadcrumbItem>
							<Link to="/staffs">Nhân viên</Link>
						</BreadcrumbItem>

						<BreadcrumbItem>
							<b>Bảng lương</b>
						</BreadcrumbItem>
					</Breadcrumb>
				</div>

				<hr />

				<div className="container">
					<div className="row">{salaryList}</div>
				</div>
			</React.Fragment>
		);
}

export default Salary;
