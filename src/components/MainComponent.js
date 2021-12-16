// General
import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { actions } from "react-redux-form";

// actions of Staffs page
import { addStaff, fetchStaffs, fetchDepartments } from "../redux/ActionCreators";

// Components
import Header from "./HeaderComponent";
import StaffList from "./StaffListComponent";
import StaffDetail from "./StaffDetailComponent";
import Department from "./DepartmentComponent";
import DepartmentDetail from "./DepartmentDetailComponent";
import Salary from "./SalaryComponent";
import Footer from "./FooterComponent";

const mapStateToProps = (state) => {
	return {
		staffs: state.staffs,
		departments: state.departments,
	};
};

// Dispatch
const mapDispatchToProps = (dispatch) => ({
	// Handle staffs
	addStaff: (name, doB, startDate, departmentId, salaryScale, annualLeave, overTime) =>
		dispatch(addStaff(name, doB, startDate, departmentId, salaryScale, annualLeave, overTime)),
	resetAddStaffModal: () => dispatch(actions.reset("feedback")),
	fetchStaffs: () => dispatch(fetchStaffs()),

	// Handle departments
	fetchDepartments: () => dispatch(fetchDepartments()),
});
class Main extends React.Component {
	componentDidMount() {
		this.props.fetchStaffs();
		this.props.fetchDepartments();
	}

	render() {
		const DepartmentPage = () => {
			return (
				<Department
					departments={this.props.departments.departments}
					departmentLoading={this.props.departments.isLoading}
					departmentsErrMsg={this.props.departments.errMsg}
				/>
			);
		};

		const SalaryPage = () => {
			return <Salary staffs={this.props.staffs.staffs} />;
		};

		const StaffWithId = ({ match }) => {
			return (
				<StaffDetail
					staff={
						this.props.staffs.staffs.filter(
							(staff) => staff.id === parseInt(match.params.staffId)
						)[0]
					}
					departments={this.props.departments.departments}
				/>
			);
		};

		const DepartmentWithId = ({ match }) => {
			return (
				<DepartmentDetail
					department={
						this.props.departments.departments.filter(
							(department) => department.id === match.params.departmentId
						)[0]
					}
					departments={this.props.departments.departments}
				/>
			);
		};

		return (
			<div>
				<Header />

				<Switch>
					<Route
						exact
						path="/staffs"
						component={() => (
							<StaffList
								staffs={this.props.staffs.staffs}
								departments={this.props.departments.departments}
								addStaff={this.props.addStaff}
								resetAddStaffModal={this.props.resetAddStaffModal}
								staffsLoading={this.props.staffs.isLoading}
								staffsErrMsg={this.props.staffs.errMsg}
							/>
						)}
					/>
					<Route path="/staffs/:staffId" component={StaffWithId} />

					<Route path="/departments" component={DepartmentPage} />
					<Route path="/departments/:departmentId" component={DepartmentWithId} />

					<Route path="/staffsSalary" component={SalaryPage} />
				</Switch>

				{/* <Redirect to="/staff" /> */}
				<Footer />
			</div>
		);
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
