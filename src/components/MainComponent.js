import React from "react";

import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addStaff, fetchStaffs } from "../redux/ActionCreators";

import Header from "./HeaderComponent";
import StaffList from "./StaffListComponent";
import StaffDetail from "./StaffDetailComponent";
import Department from "./DepartmentComponent";
import Salary from "./SalaryComponent";
import Footer from "./FooterComponent";

const mapStateToProps = (state) => {
	return {
		staffs: state.staffs,
		departments: state.departments,
	};
};

const mapDispatchToProps = (dispatch) => ({
	addStaff: (name, doB, startDate, department, salaryScale, annualLeave, overTime) =>
		dispatch(addStaff(name, doB, startDate, department, salaryScale, annualLeave, overTime)),
	fetchStaffs: () => {
		dispatch(fetchStaffs());
	},
});
class Main extends React.Component {
	componentDidMount() {
		this.props.fetchStaffs();
	}

	render() {
		const DepartmentPage = () => {
			return <Department departments={this.props.departments} />;
		};

		const SalaryPage = () => {
			return <Salary staffs={this.props.staffs} />;
		};

		const StaffWithId = ({ match }) => {
			return (
				<StaffDetail
					staff={
						this.props.staffs.staffs.filter(
							(staff) => staff.id === parseInt(match.params.staffId)
						)[0]
					}
				/>
			);
		};

		return (
			<div>
				<Header />

				<Switch>
					<Route
						exact
						path="/staff"
						component={() => (
							<StaffList
								staffs={this.props.staffs.staffs}
								addStaff={this.props.addStaff}
								staffsLoading={this.props.staffs.isLoading}
								staffsErrMsg={this.props.staffs.errMsg}
							/>
						)}
					/>

					<Route path="/staff/:staffId" component={StaffWithId} />

					<Route path="/department" component={DepartmentPage} />

					<Route path="/salary" component={SalaryPage} />
				</Switch>

				<Redirect to="/staff" />
				<Footer />
			</div>
		);
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
