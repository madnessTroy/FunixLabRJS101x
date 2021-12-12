import React from 'react';

import Home from './HomeComponent';
import Menu from './MenuComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import DishDetail from './DishdetailComponent';

import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from "react-redux"
import { actions } from 'react-redux-form'

import { addComment, fetchDishes } from '../redux/ActionCreators';

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    }
}

const mapDispatchToProps = (dispatch) => ({
    addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
    fetchDishes: () => {dispatch(fetchDishes())},
    resetFeedbackForm: () => {dispatch(actions.reset("feedback"))}
});
class Main extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount = () => {
        this.props.fetchDishes()
    }

    render() {

        const HomePage = () => {
            return (
                <Home
                    dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
                    dishesLoading={this.props.dishes.isLoading}
                    dishesErrMsg={this.props.dishes.errMsg}
                    promotion={this.props.promotions.filter((promotion) => promotion.featured)[0]}
                    leader={this.props.leaders.filter((leader) => leader.featured)[0]}
                />
            );
        };

        const AboutUsPage = () => {
            return (
                <About
                    leaders={this.props.leaders}
                />
            );
        };


        const DishWithId = ({ match }) => {
            return (
                <DishDetail
                    dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
                    isLoading={this.props.dishes.isLoading}
                    errMsg={this.props.dishes.errMsg}
                    comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
                    addComment={this.props.addComment}
                />
            );
        };



        return (
            <div>
                <Header></Header>

                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} />} />

                    <Route path="/menu/:dishId" component={DishWithId} />

                    <Route exact path="/contactus" component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} />} />
                    <Route exact path="/aboutus" component={AboutUsPage} />

                    {/* if url dosesnt match, bydefault redirect to */}
                    <Redirect to="/home" />
                </Switch>

                <Footer></Footer>
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));