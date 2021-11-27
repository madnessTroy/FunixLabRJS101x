import React from 'react'

import { STAFFS, DEPARTMENTS } from "../shared/staffs"
import { Switch, Route, Redirect } from 'react-router'

import Header from './HeaderComponent'
import StaffList from './StaffListComponent'
import Department from './DepartmentComponent'
import Salary from './SalaryComponent'
import Footer from './FooterComponent'

class Main extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            staffs: STAFFS,
            departments: DEPARTMENTS
        }
    }

    render () {
        const DepartmentPage = () => {
            return (
                <Department departments={this.state.departments} />
            )
        }

        const SalaryPage = () => {
            return (
                <Salary staffs={this.state.staffs} />
            )
        }

        return (
            <div>
                <Header />

                <Switch>
                    <Route exact path="/staff" component={() => <StaffList staffs={this.state.staffs} />} />
                    <Route path="/department" component={ DepartmentPage } />
                    <Route path="/salary" component={ SalaryPage } />
                </Switch>

                <Redirect to="/staff" />
                <Footer />
            </div>
        )
    }
}

export default Main
