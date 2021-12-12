import React from "react";

import { Modal, ModalBody, ModalHeader, Button, Row, Col, Label} from "reactstrap"
import { Control, LocalForm, Errors } from 'react-redux-form';

// validator conditions:
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len)
const minLength = (len) => (val) => (val) && (val.length >= len)

class CommentModal extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            rating: "",
            author: "",
            comment: "",

            isModalOpen: false,
        }
    }

    toggleModal = () => {
        this.setState ({
            isModalOpen: !this.state.isModalOpen
        })
    }

    handleInputChange = (e) => {
        const target = e.target
        const value = target.value
        const name = target.name

        this.setState({
            [name]: value
        })
    }

    handleSubmitComment(values) {
        this.toggleModal();
        this.props.postComment(
            this.props.dishId,
            values.rating,
            values.author,
            values.comment
        );
    }

    render() {
        return (
            <div>
                <Button color="primary"
                    onClick={this.toggleModal}
                >
                    Add comment!
                </Button>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} size="md">
                    <ModalHeader toggle={this.toggleModal}>Add comment</ModalHeader>

                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmitComment(values)}>
                            <Row className="form-group">
                                <Label md={12} htmlFor="rating">Rating</Label>
                                <Col md={12}>
                                    <Control.select model=".rating"
                                        className="rating"
                                        id="rating"
                                        value={this.state.rating}
                                        onChange={this.handleInputChange}
                                        validators={{
                                            required
                                        }}
                                    >
                                        <option>Please select: </option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                    <Errors className="text-danger"
                                        model=".rating"
                                        show="touched"
                                        messages={{
                                            required: "Required!"
                                        }}
                                    />
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Label md={12} htmlFor="author">Your name: </Label>
                                <Col md={12}>
                                    <Control.text model=".author"
                                        className="form-group"
                                        name="author"
                                        id="author"
                                        validators={{
                                            required,
                                            minLength: minLength(3),
                                            maxLength: maxLength(20)
                                        }}
                                    >
                                    </Control.text>
                                    <Errors className="text-danger"
                                        model=".author"
                                        show="touched"
                                        messages={{
                                            required: "Required! |",
                                            minLength: " Must be greater than 3 characters",
                                            maxLength: " Must be 20 characters or less"
                                        }}
                                    />
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Label md={12} htmlFor="comment">Your comment: </Label>
                                <Col md={12}>
                                    <Control.textarea rows="8" cols="50" type="textarea" model=".comment"
                                        className="form-group"
                                        name="comment"
                                        id="comment"
                                        validators={{
                                            required
                                        }}
                                    >
                                    </Control.textarea>
                                    <Errors className="text-danger"
                                        model=".comment"
                                        show="touched"
                                        messages={{
                                            required: "Required! "
                                        }}
                                    />
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Col>
                                    <Button color="primary" type="submit"> Submit! </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}


export default CommentModal