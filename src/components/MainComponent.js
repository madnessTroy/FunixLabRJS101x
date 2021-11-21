import React from 'react'
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from "./MenuComponent";
import { DISHES } from "../shared/dishes";
import DishDetail from './DishdetailComponent';

class Main extends React.Component{

  constructor (props) {
      super(props);

      this.state = {
          dishes: DISHES,
          selectedDish: null
      };
  };

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId });
}

  render () {
    return (
        <div>
            <Navbar dark color="primary">
                <div className="container">
                    <NavbarBrand className="text-warning fs-2">Indian Restaurant</NavbarBrand>
                </div>
            </Navbar>
            <Menu dishes = {this.state.dishes}
                onClick={(dishId) => this.onDishSelect(dishId)} />
        </div>
    );
  };
}


export default Main;
