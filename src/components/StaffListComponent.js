import React from 'react';

import { Card, CardImg, CardTitle, Form, Col, FormGroup, Input } from 'reactstrap';
import { Link } from 'react-router-dom';

import AddStaffModal from './AddStaffModalComponent';
import { Loading } from './LoadingComponent';

function RenderStaff({ staff }) {
	return (
		<div className="col-lg-2 col-md-3 col-sm-6">
			<Card className="mt-2">
				<Link to={`/staffs/${staff.id}`}>
					<CardImg src={staff.image} width="100%" />
					<CardTitle className="text-center">{staff.name}</CardTitle>
				</Link>
			</Card>
		</div>
	);
}
class StaffList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			search: '',
		};
	}

	handleSearchStaff = (e) => {
		this.setState({ search: e.target.value });
	};

	render() {
		const { search } = this.state;
		const staffs = this.props.staffs;

		// Spinner to wait for loading StaffList
		if (this.props.staffsLoading) {
			return <Loading />;
			// Handle loading fail
		} else if (this.props.staffsErrMsg) {
			return <h3>{this.props.staffErrMsg}</h3>;
		}

		// Map the staff list to render view
		const filteredStaff = staffs.filter((staff) => {
			return staff.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
		});

		return (
			<React.Fragment>
				<div className="container-fluid">
					<div className="row pt-3">
						{/* Header of staffsList page */}
						<div className="col-lg-4 col-sm-3">
							<h3>NHÂN VIÊN</h3>
						</div>
						{/* Add staff form */}
						<div className="col-lg-4 col-sm-8">
							<AddStaffModal
								staffs={this.props.staffs}
								departments={this.props.departments}
								postStaff={this.props.postStaff}
								resetAddStaffModal={this.props.resetAddStaffModal}
							/>
						</div>

						{/* Find staffs input */}
						<div className="col-lg-4 col-sm-12">
							<Form onSubmit={this.handleSearchStaff}>
								<FormGroup row>
									<Col>
										<Input
											type="text"
											id="search"
											name="search"
											placeholder="Nhập để tìm nhân viên . . ."
											onChange={this.handleSearchStaff}
										/>
									</Col>
								</FormGroup>
							</Form>
						</div>
					</div>

					<hr />
				</div>
				<div className="container-fluid">
					<div className="row g-2">
						{filteredStaff.map((staff) => {
							return RenderStaff({ staff });
						})}
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default StaffList;
