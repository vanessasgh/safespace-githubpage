import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form'
import { Container, Button as FloatingButton, lightColors, darkColors } from 'react-floating-action-button'
import Modal from 'react-bootstrap/Modal'
import { Link } from "react-router-dom"

function HomePage() {
    const [showCreateNewPostDialog, setShowCreateNewPostDialog] = useState(false);
    const handleCloseNewPostDialog = () => setShowCreateNewPostDialog(false);
    const handleShowCreateNewPostDialog = () => setShowCreateNewPostDialog(true);
    const handleSubmitNewPost = () => null;

    const [showNotLoggedInDialog, setShowNotLoggedInDialog] = useState(false);
    const handleCloseNotLoggedInDialog = () => setShowNotLoggedInDialog(false);
    const handleShowNotLoggedInDialog = () => setShowNotLoggedInDialog(true);

    let isLoggedIn = false;
    const showDialog = isLoggedIn ? handleShowCreateNewPostDialog : handleShowNotLoggedInDialog

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
                        onClick={showDialog}
                        styles={{ backgroundColor: darkColors.blue, color: lightColors.white }}
                    />
                </Container>
            </div>
            {/* create new post dialog */}
            <Modal show={showCreateNewPostDialog} onHide={handleCloseNewPostDialog}>
                <Modal.Body>
                    <div>
                        <div className="createNewPostDialogTitleDiv">
                            <i className="bi bi-pencil-square createNewPostIcon"></i>
                            <h1>Create a New Post</h1>
                        </div>
                        <Form>
                            <Form.Group className="mb-3" controlId="newPostContentControlInput">
                                <Form.Label>Content</Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder="How are you feeling today, username?" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="newPostTagControlInput">
                                <Form.Label>Tags</Form.Label>
                                <Form.Control type="text" placeholder="Enter tags seperated by commas" />
                            </Form.Group>
                            <Button type="submit" className="authenticationBtn">Submit</Button>
                            <Button type="cancel" variant="secondary" className="authenticationBtn" onClick={handleCloseNewPostDialog}>Cancel</Button>
                        </Form>
                    </div>
                </Modal.Body>
            </Modal>
            {/* log in dialog */}
            <Modal show={showNotLoggedInDialog} onHide={handleCloseNotLoggedInDialog}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <div className="notLoggedInDialogDiv">
                        <h1 className="center">Want to share your stories too?</h1>
                        <Link to="/signup"><button type="page" class="btn btn-primary notLoggedInDialogBtn">Create an Account</button></Link>
                        <Link to="/login"><button type="page" class="btn btn-secondary notLoggedInDialogBtn">Log In</button></Link>
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
