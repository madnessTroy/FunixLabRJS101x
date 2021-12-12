import { combineReducers, createStore, applyMiddleware } from "redux"
import { createForms, CreatForms } from "react-redux-form"
import { Dishes } from "./dishes"
import { Comments } from "./comments"
import { Promotions } from "./promotions"
import { Leaders } from "./leaders"
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import { InitialFeedback } from './form'

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders,
            ...createForms({
                feedback: InitialFeedback
            })
        }),

        applyMiddleware(thunk, logger)
    )

    return store;
}
