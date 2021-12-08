import React from 'react'

import { STAFFS, DEPARTMENTS } from "../shared/staffs"
import { Switch, Route, Redirect } from 'react-router'

import Header from './HeaderComponent'
import StaffList from './StaffListComponent'
import StaffDetail from './StaffDetailComponent'
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

        const StaffWithId = ({match}) => {
            return (
                <StaffDetail
                    staff = {this.state.staffs.filter((staff) => staff.id === parseInt(match.params.staffId))[0]}
                />
            )
        }

        const addStaff = (staff) => {
            const newStaff = this.state.staffs.concat([staff])
            this.setState({ staffs: newStaff })
            localStorage.setItem("staffs", JSON.stringify(newStaff))
        }

        return (
            <div>
                <Header />

                <Switch>
                    <Route exact path="/staff" component={() =>
                        <StaffList staffs={this.state.staffs}
                                    addStaff={addStaff}
                        />}
                    />

                    <Route path="/staff/:staffId" component={ StaffWithId } />
                    <Route path="/department" component={ DepartmentPage } />
                    <Route path="/salary" component={ SalaryPage } />
                </Switch>

                {/* <Redirect to="/staff" /> */}
                <Footer />
            </div>
        )
    }
}

export default Main
