import * as ActionTypes from "./ActionTypes";
import { baseURL } from "../shared/baseURL";

// Fetch staffs from server and Actions of staffs //
export const addStaff = (
	name,
	doB,
	startDate,
	departmentId,
	salaryScale,
	annualLeave,
	overTime
) => ({
	type: ActionTypes.ADD_STAFF,
	payload: {
		name: name,
		doB: doB,
		startDate: startDate,
		departmentId: departmentId,
		salaryScale: salaryScale,
		annualLeave: annualLeave,
		overTime: overTime,
	},
});

export const fetchStaffs = () => (dispatch) => {
	dispatch(staffsLoading(true));
	return fetch(baseURL + "staffs")
		.then(
			(response) => {
				if (response.ok) {
					return response;
				} else {
					var error = new Error("Error " + response.status + ": " + response.statusText);
					error.response = response;
					throw error;
				}
			},
			(error) => {
				var errMsg = new Error(error.message);
				throw errMsg;
			}
		)
		.then((response) => response.json())
		.then((staffs) => dispatch(addStaffs(staffs)))
		.catch((error) => dispatch(staffsFailed(error.message)));
};

export const staffsLoading = () => ({
	type: ActionTypes.STAFFS_LOADING,
});

export const staffsFailed = (errMsg) => ({
	type: ActionTypes.STAFFS_FAILED,
	payload: errMsg,
});

export const addStaffs = (staffs) => ({
	type: ActionTypes.ADD_STAFFS,
	payload: staffs,
});

// Fetch staffs from server and Actions of staffs //
export const fetchDepartments = () => (dispatch) => {
	dispatch(departmentsLoading(true));
	return fetch(baseURL + "departments")
		.then(
			(response) => {
				if (response.ok) {
					return response;
				} else {
					var error = new Error("Error " + response.status + ": " + response.statusText);
					error.response = response;
					throw error;
				}
			},
			(error) => {
				var errMsg = new Error(error.message);
				throw errMsg;
			}
		)
		.then((response) => response.json())
		.then((departments) => dispatch(addDepartments(departments)))
		.catch((error) => dispatch(departmentsFailed(error.message)));
};

export const departmentsLoading = () => ({
	type: ActionTypes.DEPARTMENTS_LOADING,
});

export const departmentsFailed = (errMsg) => ({
	type: ActionTypes.STAFFS_FAILED,
	payload: errMsg,
});

export const addDepartments = (departments) => ({
	type: ActionTypes.ADD_DEPARTMENTS,
	payload: departments,
});
