import { combineReducers, createStore, applyMiddleware } from "redux";
import { createForms } from "react-redux-form";
import { Staffs } from "./staffs";
import { Departments } from "./department";
import { Salary } from "./salary";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { InitialNewStaff } from "./forms";

export const configureStore = () => {
	const store = createStore(
		combineReducers({
			staffs: Staffs,
			departments: Departments,
			salary: Salary,
			...createForms({
				newStaff: InitialNewStaff,
			}),
		}),

		applyMiddleware(thunk, logger)
	);
	return store;
};
