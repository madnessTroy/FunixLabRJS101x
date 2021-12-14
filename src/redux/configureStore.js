import { combineReducers, createStore, applyMiddleware } from "redux";
import { Staffs } from "./staffs";
import { Departments } from "./department";
import thunk from "redux-thunk";
import logger from "redux-logger";

export const configureStore = () => {
	const store = createStore(
		combineReducers({
			staffs: Staffs,
			departments: Departments,
		}),

		applyMiddleware(thunk, logger)
	);
	return store;
};
