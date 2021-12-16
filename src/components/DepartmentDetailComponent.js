import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import StaffList, { RenderStaff } from "./StaffListComponent";

export default class DepartmentDetail extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div className="container-fluid">
					<Breadcrumb className="pt-3">
						<BreadcrumbItem>
							<Link to="/departments">Phòng ban</Link>
						</BreadcrumbItem>
						<BreadcrumbItem>
							<b>{this.props.department.name}</b>
						</BreadcrumbItem>
					</Breadcrumb>
				</div>
			</React.Fragment>
		);
	}
}
