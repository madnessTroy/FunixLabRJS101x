import * as ActionTypes from "./ActionTypes";

export const Departments = (
	state = {
		isLoading: true,
		errMsg: null,
		departments: [],
	},
	action
) => {
	switch (action.type) {
		case ActionTypes.ADD_DEPARTMENTS:
			return {
				...state,
				isLoading: false,
				errMsg: null,
				departments: action.payload,
			};

		case ActionTypes.DEPARTMENTS_LOADING:
			return {
				...state,
				isLoading: true,
				errMsg: null,
				departments: [],
			};

		case ActionTypes.DEPARTMENTS_FAILED:
			return {
				...state,
				isLoading: false,
				errMsg: action.payload,
				departments: [],
			};

		default:
			return state;
	}
};
