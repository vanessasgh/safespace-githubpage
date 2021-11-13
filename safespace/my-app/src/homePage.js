import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import { Container, Button as FloatingButton, Link, lightColors, darkColors } from 'react-floating-action-button'

function HomePage() {
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
                <CreatePostButton />
            </div>
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

function CreatePostButton() {
    return (
        <Container>
            <FloatingButton
                className="fab-item btn btn-link btn-lg text-white"
                tooltip="Create a new post"
                icon="bi bi-plus bi-lg"
                styles={{ backgroundColor: darkColors.blue, color: lightColors.white }}
            />
        </Container>
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
