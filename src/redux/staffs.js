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
		case ActionTypes.ADD_STAFFS:
			return {
				...state,
				isLoading: false,
				errMsg: null,
				staffs: action.payload,
			};

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

		case ActionTypes.ADD_STAFF:
			var staff = action.payload;
			staff.id = state.length;
			staff.image = "/assets/images/alberto.png";
			return state.staffs.concat([staff]);

		default:
			return state;
	}
};
