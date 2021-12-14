import React from "react";

import { Card, CardImg, CardTitle, FormGroup, Input } from "reactstrap";

import { Link } from "react-router-dom";

import AddStaffModal from "./AddStaffModalComponent";
import { addStaff } from "../redux/ActionCreators";
class StaffList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			search: "",
		};
	}

	onChange = (e) => {
		this.setState({ search: e.target.value });
	};

	renderStaff = (staff) => {
		return (
			<div className="col-lg-2 col-md-4 col-sm-6 g-3">
				<Card>
					<Link to={`/staff/${staff.id}`}>
						<CardImg src={staff.image} width="100%" />
						<CardTitle className="text-center">{staff.name}</CardTitle>
					</Link>
				</Card>
			</div>
		);
	};

	render() {
		const { search } = this.state;
		console.log(this.props.staffs);

		const filteredStaff = this.props.staffs.filter((staff) => {
			return staff.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
		});

		return (
			<div className="container-fluid">
				<div className="row pt-3">
					<div className="col-lg-4 col-sm-3">
						<h3>NHÂN VIÊN</h3>
					</div>

					<div className="col-lg-4 col-sm-8">
						<AddStaffModal addStaff={addStaff} />
					</div>

					{/* Tìm nhân viên */}
					<div className="col-lg-3 col-sm-12">
						<FormGroup>
							<Input
								type="text"
								placeholder="Tìm kiếm nhân viên..."
								onChange={this.onChange}
							/>
						</FormGroup>
					</div>
				</div>

				<hr />

				<div className="row">
					{filteredStaff.map((staff) => {
						return this.renderStaff(staff);
					})}
				</div>
			</div>
		);
	}
}

export default StaffList;
