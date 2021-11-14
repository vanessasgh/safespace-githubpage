import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import { Container, Button as FloatingButton, Link, lightColors, darkColors } from 'react-floating-action-button'
import Modal from 'react-bootstrap/Modal'

function HomePage() {
    const [showCreateNewPostDialog, setShowCreateNewPostDialog] = useState(false);
    const handleCloseNewPostDialog = () => setShowCreateNewPostDialog(false);
    const handleShowCreateNewPostDialog = () => setShowCreateNewPostDialog(true);
    const handleSubmitNewPost = () => null;

    return (
        <div className="mainContentDiv">
            <div className="mainHeaderDiv">
                <h1 className="mainTitleText">Feed</h1>
            </div>
            <div className="contentDiv">
                <SearchBar />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Container>
                    <FloatingButton
                        className="fab-item btn btn-link btn-lg text-white"
                        tooltip="Create a new post"
                        icon="bi bi-plus bi-lg"
                        onClick={handleShowCreateNewPostDialog}
                        styles={{ backgroundColor: darkColors.blue, color: lightColors.white }}
                    />
                </Container>
            </div>
            <Modal show={showCreateNewPostDialog} onHide={handleCloseNewPostDialog}>
                <Modal.Body>
                    <div>
                        <div className="createNewPostDialogTitleDiv">
                            <i className="bi bi-pencil-square createNewPostIcon"></i>
                            <h1>Create a New Post</h1>
                        </div>
                        <form className="createNewPostDialogContentDiv">
                            <div class="form-group">
                                <label for="createInputEmail">Content</label>
                                <input type="email" class="form-control" id="createInputEmail" aria-describedby="emailHelp" placeholder="How are you feeling today, username?"></input>
                            </div>
                            <div class="form-group">
                                <label for="usernameInput">Tags</label>
                                <input type="username" class="form-control" id="usernameInput" placeholder="Enter tags seperated by commas"></input>
                            </div>
                            <button type="submit" class="btn btn-primary authenticationBtn" onClick={handleSubmitNewPost}>Submit</button>
                            <button type="cancel" class="btn btn-secondary authenticationBtn" onClick={handleCloseNewPostDialog}>Cancel</button>
                        </form>
                    </div>
                </Modal.Body>
            </Modal>
        </div>

    )
}

function SearchBar() {
    return (
        <InputGroup className="mb-3 searchBar">
            <FormControl
                placeholder="Search a post or tag"
                aria-label="Search bar"
                aria-describedby="basic-addon2"
            />
            <Button variant="outline-secondary" id="button-addon2">
                Search
            </Button>
        </InputGroup>
    )
}

function Post() {
    const isSavedPost = false;
    return (
        <div className="postMainDiv">
            <div className="postContentDiv">
                <p>11/10/2021</p>
                <SavePostButton isSavedPost={isSavedPost} />
            </div>
            <div className="textInPostDiv">
                <p>Some text</p>
            </div>
            <p>Tags: .........</p>
        </div>
    )
}

function SavePostButton(isSavedPost) {
    const [isSaved, setSavedStatus] = useState(isSavedPost)
    let saveOrUnsavePost = () => {
        setSavedStatus(!isSaved)
    }
    let savedPostButtonClass = "bi bi-star";
    if (isSaved) {
        savedPostButtonClass = "bi bi-star-fill"
    }
    return (
        <i className={savedPostButtonClass} onClick={saveOrUnsavePost}></i>
    )

}

export default HomePage;
