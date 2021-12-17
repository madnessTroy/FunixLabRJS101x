// General
import React from "react";
import { Modal, ModalBody, ModalHeader, Button } from "reactstrap";
import { Link } from "react-router-dom";

class DeleteStaffModal extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isModalOpen: false,
			isDelete: false,
		};
	}

	toggleModal = () => {
		this.setState({
			isModalOpen: !this.state.isModalOpen,
		});
	};

	handleDeleteStaff() {
		this.props.deletedStaff(this.props.staff.id);
		this.setState({ isDelete: true });
	}

	render() {
		if (this.state.isDelete) {
			return (
				<div className="container">
					<h3 className="text-danger">Nhân viên đã xóa khỏi danh sách</h3>
					<h3>
						Quay lại<Link to="/staffs">nhân viên</Link>
					</h3>
				</div>
			);
		} else if (this.props.staff != null)
			return (
				<div>
					<Button color="danger" onClick={this.toggleModal}>
						<i className="fa fa-trash fa-sm"></i>
						<h5>Xóa</h5>
					</Button>

					<Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} size="sm">
						<ModalHeader toggle={this.toggleModal} className="bg-danger">
							Xóa nhân viên
						</ModalHeader>
						<ModalBody>
							<h3 className="text-center">Xóa nhân viên này ?</h3>
							<div className="text-center">
								<button
									className="btn btn-danger btn-lg px-4"
									onClick={() => this.handleDeleteStaff()}
								>
									Có
								</button>
								<button
									className="btn btn-secondary btn-lg px-3 ml-5"
									onClick={this.toggleModal}
								>
									Không
								</button>
							</div>
						</ModalBody>
					</Modal>
				</div>
			);
	}
}

export default DeleteStaffModal;
