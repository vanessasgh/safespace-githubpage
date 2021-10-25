function newUserFormHandler(newUser) {
    // TODO: trigger on submission of "create account" form. Get values from form fields and pass them as args to create new user component.
    let user = createUser(newUser)
}

function isValidUserHandler(user) {
    // TODO: trigger on submission of the user view's "sign in form component". Get values from form fields and compare them with its requirements then handle the response
    let isValidUser = getUserInfoByID(user.id)
    // TODO: push data to view here
}

function getUserInfoHandler(user) {
    // TODO: trigger on page load of the user view's "user profile component"
    let username = getUserInfoByID(user.id)
    // TODO: Get value from the function "get user info by id" and pushes the data to the View
}

function updateUserFormHandler(user) {
    // TODO: trigger on the submission of user view's "edit user profile component"
    // TODO: Get values from form fields and pass them as args, then pushes it into view
    updateUserInfo(user.username, user.university)
}

function getUsernameHandler(user) {
    // TODO: trigger on page load of the user view's "greeting component"
    let username = getUserInfoByID(user.id)
    // TODO: Get value from the function "get user info by id" and pushes the data to the View
}

function getUserPostsHandler(user) {
    // TODO: trigger on page load of user vew's "list post history component"
    let postHistory = getUserInfoByID(user.id).postHistory
    // TODO: Get value from "get user info by id" for its post history and pushes it to the View
}

function getUserSavedPostsHandler(user) {
    // TODO: trigger on page load of user vew's "list saved post component"
    let savedPosts = getUserInfoByID(user.id).savedPosts
    // TODO: Get value from "get user info by id" for its saved post and pushes it to the View
}