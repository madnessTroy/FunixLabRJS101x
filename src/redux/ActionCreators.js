import * as ActionTypes from "./ActionTypes"
import { baseURL } from '../shared/baseURL'

export const addComment = (comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: comment
})

export const postComment = (dishId, rating, author, comment) => (dispatch) => {
    const newComment = {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
    newComment.date = new Date().toISOString()

    return fetch(baseURL + "comments", {
        method: "POST",
        body: JSON.stringify(newComment),
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
        .then ((response) => {
            if (response.ok) {
                return response
            }
            else {
                var error = new Error ("Error " + response.status + ": " + response.statusText)
                error.response = response
                throw error
            }
        },
        error => {
            var errmsg = new Error(error.message)
            throw errmsg
        })
        .then ((response) => response.json())
        .then ((response) => dispatch(addComment(response)))
        .catch ((error) => {
            console.log("Post comments ", error.message);
            alert("Your comment could not be posted \n Error: " + error.message)
        })
}
// Dishes
export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true))

    return fetch(baseURL + "dishes")
        .then ((response) => {
            if (response.ok) {
                return response
            }
            else {
                var error = new Error ("Error " + response.status + ": " + response.statusText)
                error.response = response
                throw error
            }
        },
        error => {
            var errmsg = new Error(error.message)
            throw errmsg
        })
        .then ((response) => response.json())
        .then ((dishes) => dispatch(addDishes(dishes)))
        .catch (error => dispatch(dishesFailed(error.message)))
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
        .then ((response) => {
            if (response.ok) {
                return response
            }
            else {
                var error = new Error ("Error " + response.status + ": " + response.statusText)
                error.response = response
                throw error
            }
        },
        error => {
            var errmsg = new Error(error.message)
            throw errmsg
        })
        .then ((response) => response.json())
        .then ((comments) => dispatch(addComments(comments)))
        .catch (error => dispatch(commentsFailed(error.message)))
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
        .then ((response) => {
            if (response.ok) {
                return response
            }
            else {
                var error = new Error ("Error " + response.status + ": " + response.statusText)
                error.response = response
                throw error
            }
        },
        error => {
            var errmsg = new Error(error.message)
            throw errmsg
        })
        .then ((response) => response.json())
        .then ((promos) => dispatch(addPromos(promos)))
        .catch (error => dispatch(promosFailed(error.message)))
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
