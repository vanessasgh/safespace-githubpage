import React from 'react'
import Button from 'react-bootstrap/Button'
import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav'
import Tabs from 'react-bootstrap/Tabs'

function ProfilePage() {
    return (
        <div className="mainContentDiv contentDiv">
            <h1>Username</h1>
            <h2>University</h2>
            <Button variant="primary" className="editProfileButton">Edit</Button>
            <MainTabs />
        </div>
    )
}

function MainTabs() {
    return(
        <Tabs defaultActiveKey="posts" id="uncontrolled-tab-example" className="tabContainer" className="nav-justified">
            <Tab eventKey="posts" title="Posts" tabClassName="tabContainer">
                <AllPosts />
            </Tab>
            <Tab eventKey="saved" title="Saved" tabClassName="tabContainer">
                <SavedAllPosts />
            </Tab>
        </Tabs>
    )
}

function AllPosts() {
    return (
        <Post />
    )
}

function SavedAllPosts() {
    return (
        <SavedPost />
    )
}

function Post() {
    return (
        <div className="postMainDiv">
            <div className="postContentDiv">
                <div className="textInPostDiv">
                    <p>This is a post example</p>
                </div>
                <i class="bi bi-star"></i>
            </div>
            <p>Tags: .........</p>
        </div>
    )
}

function SavedPost() {
    return (
        <div className="postMainDiv">
            <div className="postContentDiv">
                <div className="textInPostDiv">
                    <p>This is a saved post example</p>
                </div>
                <i class="bi bi-star"></i>
            </div>
            <p>Tags: .........</p>
        </div>
    )
}

export default ProfilePage