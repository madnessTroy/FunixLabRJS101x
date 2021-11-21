import React from 'react'
import { CardBody, CardText, CardImg, CardTitle, Card } from 'reactstrap';
import Header from './HeaderComponent';
import Menu from "./MenuComponent";
import Footer from './FooterComponent';
import { DISHES } from "../shared/dishes";


class Main extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            dishes: DISHES,
            selectedDish: null
        };
    };

    onDishSelect(dishId) {
        this.setState({ selectedDish: dishId });
    }

    renderDish(dish) {
        if (dish != null) {
            return (
                <Card>
                    <div className="col-12 col-md-5 m-1">
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </div>
                </Card>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }

    render() {
        return (
            <div>
                <Header />
                <Menu dishes={this.state.dishes}
                    onClick={(dishId) => this.onDishSelect(dishId)} />
                <Footer />
            </div>
        );
    };
}


export default Main;
