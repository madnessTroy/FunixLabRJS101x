import * as ActionTypes from "./ActionTypes";

export const Salary = (
	state = {
		isLoading: true,
		errMsg: null,
		Salary: [],
	},
	action
) => {
	switch (action.type) {
		case ActionTypes.SALARY_LOADING:
			return {
				...state,
				isLoading: true,
				errMsg: null,
				Salary: [],
			};

		case ActionTypes.SALARY_FAILED:
			return {
				...state,
				isLoading: false,
				errMsg: action.payload,
				Salary: [],
			};

		case ActionTypes.ADD_SALARY:
			return {
				...state,
				isLoading: false,
				errMsg: null,
				Salary: action.payload,
			};

		default:
			return state;
	}
};
