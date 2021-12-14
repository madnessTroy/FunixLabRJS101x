import React from "react";

import { Modal, ModalBody, ModalHeader, Button, Row, Col, Label } from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";

// validator conditions:
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
class AddStaffModal extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isModalOpen: false,

			fullName: "",
			doB: "",
			startDate: "",
			department: "",
			salaryScale: "",
			annualLeave: "",
			overTime: "",
		};
	}

	toggleModal = () => {
		this.setState({
			isModalOpen: !this.state.isModalOpen,
		});
	};

	handleInputChange = (e) => {
		const target = e.target;
		const value = target.value;
		const name = target.name;

		this.setState({
			[name]: value,
		});
	};

	handleAddStaff(values) {
		// get input values
		this.props.addStaff(
			values.name,
			values.doB,
			values.startDate,
			values.department,
			values.salaryScale,
			values.annualLeave,
			values.overTime
		);
		// clear input and close modal
		this.toggleModal();
	}

	render() {
		return (
			<div>
				<Button className="mb-3" color="primary" onClick={this.toggleModal}>
					<b className="fs-5"> Thêm nhân viên</b>
				</Button>

				<Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
					<ModalHeader toggle={this.toggleModal} className="bg-primary text-light">
						Nhân viên mới
					</ModalHeader>

					<ModalBody>
						<LocalForm onSubmit={(values) => this.handleAddStaff(values)}>
							{/* Họ và tên */}
							<Row className="form-group">
								<Label htmlFor="name" md={12}>
									Họ và tên:
								</Label>
								<Col md={12}>
									<Control.text
										model=".name"
										className="form-control"
										name="name"
										id="name"
										value={this.state.name}
										onChange={this.handleInputChange}
										validators={{
											required,
											minLength: minLength(3),
											maxLength: maxLength(20),
										}}
									></Control.text>
									<Errors
										className="text-danger"
										model=".name"
										show="touched"
										messages={{
											required: "Yêu cầu nhập! |",
											minLength: " Tối thiểu 3 ký tự",
											maxLength: " Tối đa 20 ký tự",
										}}
									/>
								</Col>
							</Row>

							{/* Ngày sinh */}
							<Row className="form-group">
								<Label htmlFor="doB" md={12}>
									Ngày sinh:
								</Label>
								<Col md={12}>
									<Control
										type="date"
										model=".doB"
										className="form-control"
										name="doB"
										id="doB"
										value={this.state.doB}
										onChange={this.handleInputChange}
										validators={{ required }}
									/>
									<Errors
										className="text-danger"
										model=".doB"
										show="touched"
										messages={{
											required: "Yêu cầu nhập! ",
										}}
									/>
								</Col>
							</Row>

							{/* Ngày vào cty */}
							<Row className="form-group">
								<Label htmlFor="startDate" md={12}>
									Ngày vào công ty:
								</Label>
								<Col md={12}>
									<Control
										type="date"
										model=".startDate"
										className="form-control"
										name="startDate"
										id="startDate"
										value={this.state.startDate}
										onChange={this.handleInputChange}
										validators={{ required }}
									/>
									<Errors
										className="text-danger"
										model=".startDate"
										show="touched"
										messages={{
											required: "Yêu cầu nhập! ",
										}}
									/>
								</Col>
							</Row>

							{/* Phòng ban */}
							<Row className="form-group">
								<Label htmlFor="department" md={12}>
									Phòng ban:
								</Label>
								<Col md={12}>
									<Control.select
										model=".department"
										className="form-control"
										name="department"
										id="department"
										value={this.state.department}
										onChange={this.handleInputChange}
										validators={{ required }}
									>
										<option>Vui lòng chọn</option>
										<option>Sale</option>
										<option>Marketing</option>
										<option>IT</option>
										<option>Finance</option>
										<option>HR</option>
									</Control.select>
									<Errors
										className="text-danger"
										model=".department"
										show="touched"
										messages={{
											required: "Yêu cầu nhập! ",
										}}
									/>
								</Col>
							</Row>

							{/* Hệ số lương */}
							<Row className="form-group">
								<Label htmlFor="salaryScale" md={12}>
									Hệ số lương:
								</Label>
								<Col md={12}>
									<Control
										type="number"
										model=".salaryScale"
										className="form-control"
										name="salaryScale"
										id="salaryScale"
										placeholder="1.0 -> 3.0"
										value={this.state.salaryScale}
										onChange={this.handleInputChange}
										validators={{ required }}
									/>
									<Errors
										model=".salaryScale"
										className="text-danger"
										show="touched"
										messages={{
											required: "Yêu cầu nhập!",
										}}
									/>
								</Col>
							</Row>

							{/* Ngày nghỉ */}
							<Row className="form-group">
								<Label htmlFor="annualLeave" md={12}>
									Số ngày nghỉ còn lại:
								</Label>
								<Col md={12}>
									<Control
										type="number"
										model=".annualLeave"
										className="form-control"
										name="annualLeave"
										id="annualLeave"
										value={this.state.annualLeave}
										onChange={this.handleInputChange}
										validators={{ required }}
									/>
									<Errors
										model=".annualLeave"
										className="text-danger"
										show="touched"
										messages={{
											required: "Yêu cầu nhập!",
										}}
									/>
								</Col>
							</Row>

							{/* Ngày tăng ca */}
							<Row className="form-group">
								<Label htmlFor="overTime" md={12}>
									Số ngày tăng ca:
								</Label>
								<Col md={12}>
									<Control
										type="number"
										model=".overTime"
										className="form-control"
										name="overTime"
										id="overTime"
										value={this.state.overTime}
										onChange={this.handleInputChange}
										validators={{ required }}
									/>
									<Errors
										model=".overTime"
										className="text-danger"
										show="touched"
										messages={{
											required: "Yêu cầu nhập!",
										}}
									/>
								</Col>
							</Row>

							{/* submit Add staff */}
							<Row className="form-group pt-3">
								<Col>
									<Button type="submit" color="primary">
										Thêm nhân viên
									</Button>
								</Col>
							</Row>
						</LocalForm>
					</ModalBody>
				</Modal>
			</div>
		);
	}
}

export default AddStaffModal;
