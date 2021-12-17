// General
import React from "react";
import { Modal, ModalBody, ModalHeader, Button, Row, Col, Label } from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";

// validator conditions:
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
const isNumber = (val) => !isNaN(Number(val));
class AddStaffModal extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isModalOpen: false,
		};
	}

	toggleModal = () => {
		this.setState({
			isModalOpen: !this.state.isModalOpen,
		});
	};

	handleAddStaff(values) {
		// get input values
		let salary = 3000000 * values.salaryScale + 2000000 * values.overTime;
		let newStaff = {
			name: values.name,
			doB: values.doB,
			startDate: values.startDate,
			departmentId: values.department ? values.department : "Dept01",
			salaryScale: values.salaryScale,
			annualLeave: values.annualLeave,
			overTime: values.overTime,
			salary: salary,
			image: "/asset/images/alberto.png",
		};
		this.props.postStaff(newStaff);

		// clear input and close modal
		this.props.resetAddStaffModal();
		this.toggleModal();
	}

	render() {
		return (
			<div>
				<Button className="mb-3" color="primary" onClick={this.toggleModal}>
					<b className="fs-5">Thêm nhân viên</b>
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
									>
										<option value="Dept01">Sale</option>
										<option value="Dept02">HR</option>
										<option value="Dept03">Marketing</option>
										<option value="Dept04">IT</option>
										<option value="Dept05">Finance</option>
									</Control.select>
								</Col>
							</Row>

							{/* Hệ số lương */}
							<Row className="form-group">
								<Label htmlFor="salaryScale" md={12}>
									Hệ số lương:
								</Label>
								<Col md={12}>
									<Control.text
										model=".salaryScale"
										className="form-control"
										name="salaryScale"
										id="salaryScale"
										placeholder="1.0 -> 3.0"
										value={this.state.salaryScale}
										validators={{ required, isNumber }}
									/>
									<Errors
										model=".salaryScale"
										className="text-danger"
										show="touched"
										messages={{
											required: "Yêu cầu nhập! |",
											isNumber: " Phải là số!",
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
										model=".annualLeave"
										className="form-control"
										name="annualLeave"
										id="annualLeave"
										value={this.state.annualLeave}
										onChange={this.handleInputChange}
										validators={{ required, isNumber }}
									/>
									<Errors
										model=".annualLeave"
										className="text-danger"
										show="touched"
										messages={{
											required: "Yêu cầu nhập số! |",
											isNumber: " Phải là số!",
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
										model=".overTime"
										className="form-control"
										name="overTime"
										id="overTime"
										value={this.state.overTime}
										onChange={this.handleInputChange}
										validators={{ required, isNumber }}
									/>
									<Errors
										model=".overTime"
										className="text-danger"
										show="touched"
										messages={{
											required: "Yêu cầu nhập số! |",
											isNumber: " Phải là số!",
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
