import React from "react";

import {
  Card,
  CardImg,
  CardTitle,
  FormGroup,
  Input,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  FormFeedback,
  Label,
} from "reactstrap";
import { Link } from "react-router-dom";
class StaffList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // Data
      search: "",

      // Function event
      isModalOpen: false,

      fullName: "",
      doB: "",
      startDate: "",
      department: "",
      salaryScale: "",
      annualLeave: "",
      overTime: "",

      touched: {
        fullName: false,
        doB: false,
        startDate: false,
      },
    };
  }

  toggleModal = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  };

  onChange = (e) => {
    this.setState({ search: e.target.value });
  };

  handleInputChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  handleAddStaff = (e) => {
    e.preventDefault();

    const newStaff = {
      id: this.props.staffs.length,
      name: this.state.fullName,
      doB: this.state.doB,
      startDate: this.state.startDate,
      department: this.state.department,
      salaryScale: this.state.salaryScale,
      annualLeave: this.state.annualLeave,
      overTime: this.state.overTime,
      image: "/assets/images/alberto.png",
    };

    // validate
    const check = this.validate(this.state.fullName, this.state.doB, this.state.startDate);
    console.log(check)
     if (!check.doB || !check.fullName || !check.startDate) return

    // add new staff
    const addStaff = this.props.addStaff;
    { addStaff(newStaff); }

    // Clear input and close modal
    this.setState({ fullName: "" });
    this.setState({ doB: "" });
    this.setState({ startDate: "" });
    this.setState({ department: "" });
    this.setState({ salaryScale: "" });
    this.setState({ annualLeave: "" });
    this.setState({ overTime: "" });
    this.toggleModal();
  };

  handleBlur = (field) => (e) => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    });
  };

  validate(fullName, doB, startDate) {
    const errors = {
      fullName: "",
      doB: "",
      startDate: "",
    };

    if (this.state.touched.fullName && fullName.length === 0)
      errors.fullName = "Yêu cầu nhập!";
    if (this.state.touched.fullName && fullName.length < 5)
      errors.fullName = "Ít nhất 5 ký tự";
    if (this.state.touched.fullName && fullName.length > 20)
      errors.fullName = "Tối đa 20 ký tự";

    if (this.state.touched.doB && doB === "") errors.doB = "Yêu cầu nhập!";

    if (this.state.touched.startDate && startDate === "")
      errors.startDate = "Yêu cầu nhập!";

    return errors;
  }

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

    const staffs = this.props.staffs;

    const filteredStaff = staffs.filter((staff) => {
      return staff.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });

    const errors = this.validate(
      this.state.fullName,
      this.state.doB,
      this.state.startDate
    );

    return (
      <div className="container-fluid">
        <div className="row pt-3">
          <div className="col-lg-4 col-sm-3">
            <h3>NHÂN VIÊN</h3>
          </div>

          <div className="col-lg-4 col-sm-8 ml-auto">
            <Button onClick={this.toggleModal} color="primary">
              <b>+</b>
            </Button>
          </div>

          <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
            <ModalHeader
              toggle={this.toggleModal}
              className="bg-primary text-light"
            >
              Nhân viên mới
            </ModalHeader>

            <ModalBody>
              <FormGroup>
                <Label htmlFor="fullName">Họ và tên:</Label>
                <Input
                  type="text"
                  name="fullName"
                  id="fullName"
                  value={this.state.fullName}
                  valid={errors.fullName === ""}
                  invalid={errors.fullName !== ""}
                  onBlur={this.handleBlur("fullName")}
                  onChange={this.handleInputChange}
                />
                <FormFeedback>{errors.fullName}</FormFeedback>
              </FormGroup>

              <FormGroup className="pt-3">
                <Label htmlFor="doB">Ngày sinh:</Label>
                <Input
                  type="date"
                  name="doB"
                  id="doB"
                  value={this.state.doB}
                  valid={errors.doB === ""}
                  invalid={errors.doB !== ""}
                  onBlur={this.handleBlur("doB")}
                  onChange={this.handleInputChange}
                />
                <FormFeedback>{errors.doB}</FormFeedback>
              </FormGroup>

              <FormGroup className="pt-3">
                <Label htmlFor="startDate">Ngày vào công ty:</Label>
                <Input
                  type="date"
                  name="startDate"
                  id="startDate"
                  value={this.state.startDate}
                  valid={errors.startDate === ""}
                  invalid={errors.startDate !== ""}
                  onBlur={this.handleBlur("startDate")}
                  onChange={this.handleInputChange}
                />
                <FormFeedback>{errors.startDate}</FormFeedback>
              </FormGroup>

              <FormGroup className="pt-3">
                <Label htmlFor="department">Phòng ban:</Label>
                <Input
                  type="select"
                  name="department"
                  id="department"
                  value={this.state.department}
                  onChange={this.handleInputChange}
                >
                  <option></option>
                  <option value="sale">Sale</option>
                  <option value="it">IT</option>
                  <option value="marketing">Marketing</option>
                  <option value="hr">HR</option>
                  <option value="finance">Finance</option>
                </Input>
              </FormGroup>

              <FormGroup className="pt-3">
                <Label htmlFor="salaryScale">Hệ số lương:</Label>
                <Input
                  type="number"
                  name="salaryScale"
                  id="salaryScale"
                  min="1"
                  max="3"
                  placeholder="1.0 -> 3.0"
                  value={this.state.salaryScale}
                  onChange={this.handleInputChange}
                />
              </FormGroup>

              <FormGroup className="pt-3">
                <Label htmlFor="annualLeave">Số ngày nghỉ còn lại:</Label>
                <Input
                  type="number"
                  name="annualLeave"
                  id="annualLeave"
                  min="0"
                  value={this.state.annualLeave}
                  onChange={this.handleInputChange}
                />
              </FormGroup>

              <FormGroup className="pt-3">
                <Label htmlFor="overTime">Số ngày tăng ca:</Label>
                <Input
                  type="number"
                  name="overTime"
                  id="overTime"
                  min="0"
                  value={this.state.overTime}
                  onChange={this.handleInputChange}
                />
              </FormGroup>

              <FormGroup className="pt-3">
                <Button
                  color="primary"
                  type="submit"
                  onClick={this.handleAddStaff}
                >
                  Thêm nhân viên
                </Button>
              </FormGroup>
            </ModalBody>
          </Modal>

          <div className="col-lg-4 col-sm-12">
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
