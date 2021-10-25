function newUserFormHandler() {
    // TODO: trigger on submission of "create account" form. Get values from form fields and pass them as args to create new user component.
}

function isValidUserHandler() {
    // TODO: trigger on submission of the user view's "sign up form component". Get values from form fields and compare them with its requirements then handle the response
    let isValidUser = getUserInfoByID(id)
    // TODO: push data to view here
}

function updateUserFormHandler() {
    // TODO: trigger on the submission of user view's "edit user profile component"
    // TODO: Get values from form fields and pass them as args, then pushes it into view
    updateUserInfo(name, university)
}

function getUserInfoHandler() {
    // TODO: trigger on page load of the user view's "greeting component"
    let username = getUserInfoByID(id)
    // TODO: Get value from the function "get user info by id" and pushes the data to the View
}

function getUserPostsHandler() {
    // TODO: trigger on page load of user vew's "list post history component"
    let postHistory = getUserInfoByID(id).postHistory
    // TODO: Get value from "get user info by id" for its post history and pushes it to the View
}

function getUserSavedPostsHandler() {
    // TODO: trigger on page load of user vew's "list saved post component"
    let savedPosts = getUserInfoByID(id).savedPosts
    // TODO: Get value from "get user info by id" for its saved post and pushes it to the View
}