import React from "react";
import {
	Card,
	CardImg,
	CardTitle,
	Breadcrumb,
	BreadcrumbItem,
	CardBody,
	CardText,
} from "reactstrap";
import { Link } from "react-router-dom";

import CommentModal from "./CommentModalComponent";
import { Loading } from "./LoadingComponent";
import { baseURL } from "../shared/baseURL";
import { FadeTransform, Stagger, Fade } from "react-animation-components";

function RenderDish({ dish }) {
	if (dish != null) {
		return (
			<div className="col-12 col-md-5 m-1">
				<FadeTransform
					in
					transformProps={{
						exitTransform: "scale(0.5) translateY(-50%)",
					}}
				>
					<Card>
						<CardImg width="100%" src={baseURL + dish.image} alt={dish.name} />
						<CardBody>
							<CardTitle> {dish.name}</CardTitle>
							<CardText> {dish.description} </CardText>
						</CardBody>
					</Card>
				</FadeTransform>
			</div>
		);
	} else {
		return <div></div>;
	}
}

function RenderComments({ comments, postComment, dishId }) {
	if (comments == null) {
		return <div></div>;
	} else
		return (
			<div className="col-12 col-md-5 m-1">
				<h4> Comments </h4>
				<ul className="list-unstyled">
					<Stagger in>
						{comments.map((comment) => {
							return (
								<Fade in>
									<li key={comment.id}>
										<p>{comment.comment}</p>
										<p>
											-- {comment.author},
											{new Intl.DateTimeFormat("en-US", {
												year: "numeric",
												month: "long",
												day: "2-digit",
											}).format(new Date(comment.date))}
										</p>
									</li>
								</Fade>
							);
						})}
					</Stagger>
				</ul>

				<CommentModal dishId={dishId} postComment={postComment} />
			</div>
		);
}

const DishDetail = (props) => {
	if (props.isLoading) {
		return (
			<div className="container">
				<div className="row">
					<Loading />
				</div>
			</div>
		);
	}
	if (props.errMsg) {
		return (
			<div className="container">
				<div className="row">
					<h4>{props.errMsg}</h4>
				</div>
			</div>
		);
	}

	const dish = props.dish;

	if (dish == null) {
		return <div></div>;
	}

	return (
		<div className="container">
			<div className="row">
				<Breadcrumb>
					<BreadcrumbItem>
						<Link to="/menu">Menu</Link>
					</BreadcrumbItem>
					<BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
				</Breadcrumb>

				<div className="col-12">
					<h3> {props.dish.menu}</h3>
					<hr />
				</div>
			</div>

			<div className="row">
				<RenderDish dish={props.dish} />
				<RenderComments
					comments={props.comments}
					postComment={props.postComment}
					dishId={props.dish.id}
				/>
			</div>
		</div>
	);
};

export default DishDetail;
