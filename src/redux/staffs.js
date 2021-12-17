import * as ActionTypes from "./ActionTypes";

export const Staffs = (
	state = {
		isLoading: true,
		errMsg: null,
		staffs: [],
	},
	action
) => {
	switch (action.type) {
		case ActionTypes.STAFFS_LOADING:
			return {
				...state,
				isLoading: true,
				errMsg: null,
				staffs: [],
			};

		case ActionTypes.STAFFS_FAILED:
			return {
				...state,
				isLoading: false,
				errMsg: action.payload,
				staffs: [],
			};

		case ActionTypes.ADD_STAFFS:
			return {
				...state,
				isLoading: false,
				errMsg: null,
				staffs: action.payload,
			};

		case ActionTypes.ADD_STAFF:
			let newStaff = action.payload;
			newStaff.id = state.staffs.length;
			newStaff.image = "/asset/images/alberto.png";
			return {
				...state,
				isLoading: false,
				errMsg: null,
				staffs: [...state.staffs, newStaff],
			};

		default:
			return state;
	}
};
