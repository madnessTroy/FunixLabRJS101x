import { STAFFS } from "../shared/staffs";
import * as ActionTypes from "./ActionTypes"

export const Staffs = (state = STAFFS, action) => {
    switch(action.type) {
        case ActionTypes.ADD_STAFF:
            var staff = action.payload
            staff.id = state.length
            staff.image = "/assets/images/alberto.png"

            return state.concat(staff)

        default:
            return state
    }
}