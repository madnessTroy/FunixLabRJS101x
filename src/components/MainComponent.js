import React from "react";

import Home from "./HomeComponent";
import Menu from "./MenuComponent";
import About from "./AboutComponent";
import Contact from "./ContactComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import DishDetail from "./DishdetailComponent";

import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { actions } from "react-redux-form";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import { postComment, fetchDishes, fetchComments, fetchPromos } from "../redux/ActionCreators";

const mapStateToProps = (state) => {
	return {
		dishes: state.dishes,
		comments: state.comments,
		promotions: state.promotions,
		leaders: state.leaders,
	};
};

const mapDispatchToProps = (dispatch) => ({
	postComment: (dishId, rating, author, comment) =>
		dispatch(postComment(dishId, rating, author, comment)),
	fetchDishes: () => {
		dispatch(fetchDishes());
	},
	resetFeedbackForm: () => {
		dispatch(actions.reset("feedback"));
	},
	fetchPromos: () => {
		dispatch(fetchPromos());
	},
	fetchComments: () => {
		dispatch(fetchComments());
	},
});
class Main extends React.Component {
	componentDidMount = () => {
		this.props.fetchDishes();
		this.props.fetchPromos();
		this.props.fetchComments();
	};

	render() {
		const HomePage = () => {
			return (
				<Home
					dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
					dishesLoading={this.props.dishes.isLoading}
					dishErrMsg={this.props.dishes.errMsg}
					promotion={
						this.props.promotions.promotions.filter((promo) => promo.featured)[0]
					}
					promosLoading={this.props.promotions.isLoading}
					promosErrMsg={this.props.promotions.errMsg}
					leader={this.props.leaders.filter((leader) => leader.featured)[0]}
				/>
			);
		};

		const AboutUsPage = () => {
			return <About leaders={this.props.leaders} />;
		};

		const DishWithId = ({ match }) => {
			return (
				<DishDetail
					dish={
						this.props.dishes.dishes.filter(
							(dish) => dish.id === parseInt(match.params.dishId, 10)
						)[0]
					}
					isLoading={this.props.dishes.isLoading}
					errMsg={this.props.dishes.errMsg}
					comments={this.props.comments.comments.filter(
						(comment) => comment.dishId === parseInt(match.params.dishId, 10)
					)}
					commentsErrMsg={this.props.comments.errMsg}
					postComment={this.props.postComment}
				/>
			);
		};

		return (
			<div>
				<Header />
				<TransitionGroup>
					<CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
						<Switch>
							<Route path="/home" component={HomePage} />
							<Route
								exact
								path="/menu"
								component={() => <Menu dishes={this.props.dishes} />}
							/>

							<Route path="/menu/:dishId" component={DishWithId} />

							<Route
								exact
								path="/contactus"
								component={() => (
									<Contact resetFeedbackForm={this.props.resetFeedbackForm} />
								)}
							/>
							<Route exact path="/aboutus" component={AboutUsPage} />

							{/* if url dosesnt match, bydefault redirect to */}
							<Redirect to="/home" />
						</Switch>
					</CSSTransition>
				</TransitionGroup>

				<Footer />
			</div>
		);
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
