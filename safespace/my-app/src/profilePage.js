import React from 'react'
import Button from 'react-bootstrap/Button'
import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav'

function ProfilePage() {
    return (
        <div className="mainContentDiv contentDiv">
            <h1>Username</h1>
            <h2>University</h2>
            <Button variant="primary" className="editProfileButton">Edit</Button>
            <Tabs />
        </div>
    )
}

function Tabs() {
    return (
        <Tab.Container id="tabContainer" defaultActiveKey="posts">
            <Nav variant="tabs" className="flex-row">
                <Nav.Item className="tabNavItem">
                    <Nav.Link eventKey="posts" className="tabNavLink">Posts</Nav.Link>
                </Nav.Item>
                <Nav.Item className="tabNavItem">
                    <Nav.Link eventKey="saved">Saved</Nav.Link>
                </Nav.Item>
            </Nav>
            <Tab.Content className="tabContentItem">
                <Tab.Pane eventKey="posts">
                    <AllPosts />
                </Tab.Pane>
                <Tab.Pane eventKey="saved">
                    <SavedAllPosts />
                </Tab.Pane>
            </Tab.Content>
        </Tab.Container>
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