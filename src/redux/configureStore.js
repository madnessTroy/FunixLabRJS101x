import { combineReducers, createStore } from "redux";
import { Staffs } from "./staffs";
import { Departments } from "./department";

export const configureStore = () => {
	const store = createStore(
		combineReducers({
			staffs: Staffs,
			departments: Departments,
		})
	);
	return store;
};
