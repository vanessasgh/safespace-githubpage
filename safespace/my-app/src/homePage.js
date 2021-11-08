import React from 'react';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

function HomePage() {
    return (
        <div className="mainContentDiv">
            <div className="mainHeaderDiv">
                <h1 className="mainTitleText">Feed</h1>
            </div>
            <div className="contentDiv">
                <SearchBar />
                <Post />
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
    return (
        <div className="postMainDiv">
            <div className="postContentDiv">
                <div className="textInPostDiv">
                    <p>Some text</p>
                </div>
                <i class="bi bi-star"></i>
            </div>
            <p>Tags: .........</p>
        </div>
    )
}


export default HomePage;
