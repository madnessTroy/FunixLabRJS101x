// General
import React from "react";
import { Modal, ModalBody, ModalHeader, Button, Row, Col, Label } from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";
import dateFormat from "dateformat";

// validator conditions:
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
const isNumber = (val) => !isNaN(Number(val));

class UpdateStaffModal extends React.Component {
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

	handleInputChange = (e) => {
		const target = e.target;
		const value = target.value;
		const name = target.name;

		this.setState({
			[name]: value,
		});
	};

	handleUpdatedStaff(values) {
		// get input values
		let salary = 3000000 * values.salaryScale + 2000000 * values.overTime;
		let updatedStaff = {
			id: this.props.staff.id,
			name: values.name,
			doB: values.doB,
			startDate: values.startDate,
			department: values.department,
			salaryScale: values.salaryScale,
			annualLeave: values.annualLeave,
			overTime: values.overTime,
			salary: salary,
			image: "/asset/images/alberto.png",
		};
		this.props.patchStaff(updatedStaff);
		// clear input and close modal
		this.props.resetAddStaffModal();
		this.toggleModal();
	}

	render() {
		return (
			<React.Fragment>
				<Button color="success" onClick={this.toggleModal}>
					<i className="fa fa-pencil fa-sm"></i>
					<h5>Cập nhật</h5>
				</Button>

				<Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
					<ModalHeader toggle={this.toggleModal} className="bg-success text-light">
						Cập nhật nhân viên
					</ModalHeader>

					<ModalBody>
						<LocalForm onSubmit={(values) => this.handleUpdatedStaff(values)}>
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
										defaultValue={this.props.staff.name}
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
										defaultValue={dateFormat(
											this.props.staff.doB,
											"yyyy-mm-dd"
										)}
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
										defaultValue={dateFormat(
											this.props.staff.doB,
											"yyyy-mm-dd"
										)}
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
										defaultValue={this.props.staff.departmentId}
										onChange={this.handleInputChange}
										validators={{ required }}
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
										defaultValue={this.props.staff.salaryScale}
										validators={{ isNumber }}
									/>
									<Errors
										model=".salaryScale"
										className="text-danger"
										show="touched"
										messages={{
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
										defaultValue={this.props.staff.annualLeave}
										onChange={this.handleInputChange}
										validators={{ isNumber }}
									/>
									<Errors
										model=".annualLeave"
										className="text-danger"
										show="touched"
										messages={{
											isNumber: "Phải là số!",
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
										defaultValue={this.props.staff.overTime}
										onChange={this.handleInputChange}
										validators={{ isNumber }}
									/>
									<Errors
										model=".overTime"
										className="text-danger"
										show="touched"
										messages={{
											isNumber: "Phải là số!",
										}}
									/>
								</Col>
							</Row>

							{/* submit Add staff */}
							<Row className="form-group pt-3">
								<Col>
									<Button type="submit" color="success">
										Cập nhật
									</Button>
								</Col>
							</Row>
						</LocalForm>
					</ModalBody>
				</Modal>
			</React.Fragment>
		);
	}
}

export default UpdateStaffModal;
