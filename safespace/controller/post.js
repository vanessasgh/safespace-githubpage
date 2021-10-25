function newPostFormHandler() {
    // TODO: trigger on the submission of post view's "post form component"
    createPost(content, tags)
    // TODO: get values from form fields and pass them as args, then pushes it to the post's view
}

function newSearchPostHandler() {
    // TODO: trigger on the submission of existing post view's "post component"
    let keyword = ""
    searchPost(keyword)
    // TODO: get values from field and pass them as args
    // TODO: gets filtered Post objects in a list, then pushes the data to the View
}