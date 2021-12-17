// General
import React from "react";
import { Modal, ModalBody, ModalHeader, Button } from "reactstrap";
class DeleteStaffModal extends React.Component {
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

	handleDeleteStaff() {
		this.props.deletedStaff(this.props.staff.id);
	}

	render() {
		return (
			<div>
				{console.log(this.state.isDelete)}
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
