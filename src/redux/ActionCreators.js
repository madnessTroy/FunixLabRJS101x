import * as ActionTypes from "./ActionTypes"
import { baseURL } from '../shared/baseURL'

export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
})
// Dishes
export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true))

    return fetch(baseURL + "dishes")
        .then ((response) => response.json())
        .then ((dishes) => dispatch(addDishes(dishes)))
}

export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
})

export const dishesFailed = (errmsg) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmsg
})

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
})

// Comments
export const fetchComments = () => (dispatch) => {
    return fetch(baseURL + "comments")
        .then ((response) => response.json())
        .then ((comments) => dispatch(addComments(comments)))
}

export const commentsFailed = (errmsg) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmsg
})

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
})

// Promotions
export const fetchPromos = () => (dispatch) => {
    dispatch(promosLoading())

    return fetch(baseURL + "promotions")
        .then ((response) => response.json())
        .then ((promos) => dispatch(addPromos(promos)))
}

export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
})

export const promosFailed = (errmsg) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmsg
})

export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
})
