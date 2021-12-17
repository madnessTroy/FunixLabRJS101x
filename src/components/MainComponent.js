// General
import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { actions } from "react-redux-form";

// actions of Staffs page
import {
	postStaff,
	fetchStaffs,
	fetchDepartments,
	fetchSalary,
	patchStaff,
	deletedStaff,
} from "../redux/ActionCreators";

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
		salary: state.salary,
	};
};

// Dispatch
const mapDispatchToProps = (dispatch) => ({
	// Handle staffs
	postStaff: (newStaff) => dispatch(postStaff(newStaff)),
	resetAddStaffModal: () => dispatch(actions.reset("newStaff")),
	fetchStaffs: () => dispatch(fetchStaffs()),
	patchStaff: (updatedStaff) => dispatch(patchStaff(updatedStaff)),
	deletedStaff: (staffId) => dispatch(deletedStaff(staffId)),
	// Handle departments
	fetchDepartments: () => dispatch(fetchDepartments()),

	// Handel staffsSalary
	fetchSalary: () => dispatch(fetchSalary()),
});
class Main extends React.Component {
	componentDidMount() {
		this.props.fetchStaffs();
		this.props.fetchDepartments();
		this.props.fetchSalary();
	}

	render() {
		const DepartmentPage = () => {
			return (
				<Department
					departments={this.props.departments.departments}
					departmentsLoading={this.props.departments.isLoading}
					departmentsErrMsg={this.props.departments.errMsg}
				/>
			);
		};

		const SalaryPage = () => {
			return (
				<Salary
					staffsSalary={this.props.staffs.staffs}
					salaryLoading={this.props.salary.isLoading}
					salaryErrMsg={this.props.salary.errMsg}
				/>
			);
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
					patchStaff={this.props.patchStaff}
					deletedStaff={this.props.deletedStaff}
					resetAddStaffModal={this.props.resetAddStaffModal}
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
					staffs={this.props.staffs.staffs}
				/>
			);
		};

		return (
			<React.Fragment>
				<Header />

				<Switch>
					<Route
						exact
						path="/staffs"
						component={() => (
							<StaffList
								staffs={this.props.staffs.staffs}
								departments={this.props.departments.departments}
								postStaff={this.props.postStaff}
								resetAddStaffModal={this.props.resetAddStaffModal}
								staffsLoading={this.props.staffs.isLoading}
								staffsErrMsg={this.props.staffs.errMsg}
							/>
						)}
					/>
					<Route path="/staffs/:staffId" component={StaffWithId} />

					<Route exact path="/departments" component={DepartmentPage} />
					<Route path="/departments/:departmentId" component={DepartmentWithId} />

					<Route path="/staffsSalary" component={SalaryPage} />
				</Switch>

				{/* <Redirect to="/staff" /> */}
				<Footer />
			</React.Fragment>
		);
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
