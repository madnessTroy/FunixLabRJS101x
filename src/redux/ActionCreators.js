import * as ActionTypes from "./ActionTypes";
import { baseURL } from "../shared/baseURL";

// Fetch staffs from server and Actions of staffs //

// ------- Begin postStaff actions ------- //
export const postStaff = (newStaff) => (dispatch) => {
	return fetch(baseURL + "staffs", {
		method: "POST",
		body: JSON.stringify(newStaff),
		headers: {
			"Content-Type": "application/json",
		},
		credentials: "same-origin",
	})
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
		.then((staff) => dispatch(addStaffs(staff)))
		.catch((error) => {
			alert("Updated failed ....\nError: " + error.message);
		});
};
// ------- End postStaff ------- //

// ------- Begin patchStaff actions ------- //
export const patchStaff = (updatedStaff) => (dispatch) => {
	return fetch(baseURL + "staffs", {
		method: "PATCH",
		body: JSON.stringify(updatedStaff),
		headers: {
			"Content-Type": "application/json",
		},
	})
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
		.then((updatedStaffsList) => dispatch(addStaffs(updatedStaffsList)))
		.catch((error) => alert("Updated failed ... " + error.message));
};
// ------- End patchStaff ------- //

// ------- Begin deletedStaff actions ------- //
export const deletedStaff = (staffId) => (dispatch) => {
	return fetch(baseURL + "staffs/" + staffId, {
		method: "DELETE",
	})
		.then(
			(response) => {
				if (response.ok) {
					return response;
				} else {
					var error = new Error("Error " + response.status + ": " + response.statusText);
					error.message = response;
					throw error;
				}
			},
			(error) => {
				var errMsg = new Error(error.message);
				throw errMsg;
			}
		)
		.then((response) => response.json())
		.then((deletedStaff) => dispatch(addStaffs(deletedStaff)))
		.catch((error) => alert("Updated failed ... " + error.message));
};
// ------- End deletedStaff ------- //

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
	type: ActionTypes.DEPARTMENTS_FAILED,
	payload: errMsg,
});

export const addDepartments = (departments) => ({
	type: ActionTypes.ADD_DEPARTMENTS,
	payload: departments,
});

// Fetch staffsSalary from server and Actions of staffsSalary //
export const fetchSalary = () => (dispatch) => {
	dispatch(salaryLoading(true));
	return fetch(baseURL + "staffsSalary")
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
		.then((Salary) => dispatch(addSalary(Salary)))
		.catch((error) => dispatch(salaryFailed(error.message)));
};

export const salaryLoading = () => ({
	type: ActionTypes.SALARY_LOADING,
});

export const salaryFailed = (errMsg) => ({
	type: ActionTypes.SALARY_FAILED,
	payload: errMsg,
});

export const addSalary = (salary) => ({
	type: ActionTypes.ADD_SALARY,
	payload: salary,
});
