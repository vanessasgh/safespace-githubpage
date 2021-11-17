import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav'
import Tabs from 'react-bootstrap/Tabs'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import { Typeahead } from 'react-bootstrap-typeahead'
import college from './us_institutions.json'

var formattedCollege = []
for (var i = 0; i < college.length; i++) {
    formattedCollege.push(college[i].institution)
}

function ProfilePage() {
    //TODO: Connect firebase, instead of using dummy data
    let data = { username: "testuser", university: "Auburn University" }

    //TODO: Change it to proper conditions for input
    let isCorrectCondition = true;

    const [userProfileData, setUserProfileData] = useState(data);
    const [username, setUsername] = useState(userProfileData.username);
    const [university, setUniversity] = useState([userProfileData.university]);


    const [showEditProfile, setShowEditProfile] = useState(false);
    const handleCloseEditProfile = () => setShowEditProfile(false);
    const handleShowEditProfile = () => setShowEditProfile(true);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!isCorrectCondition) {
            alert('wrong requirements')
        } else {
            setUserProfileData({ username: username, university: university })
            //TODO: Update data to firebase here
            handleCloseEditProfile();
        }
    }

    return (
        <div className="mainContentDiv contentDiv">
            <h1>{userProfileData.username}</h1>
            <h2>{userProfileData.university}</h2>
            <Button variant="primary" className="editProfileButton" onClick={handleShowEditProfile}>Edit</Button>
            <MainTabs />
            <Modal show={showEditProfile} onHide={handleCloseEditProfile}>
                <Modal.Body>
                    <div>
                        <div className="createNewPostDialogTitleDiv">
                            <h1>Edit Profile</h1>
                        </div>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="usernameControlInPut">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" placeholder="Enter new username" defaultValue={username} onChange={(e) => setUsername(e.target.value)} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="universitySelectControlInput">
                                <Form.Label>College</Form.Label>
                                <Typeahead
                                    id="basic-typeahead-single"
                                    labelKey="name"
                                    onChange={(e) => setUniversity(e)}
                                    options={formattedCollege}
                                    placeholder="Select your current college"
                                    selected={university}
                                />
                            </Form.Group>
                            <Button type="submit" className="authenticationBtn">Save</Button>
                            <Button type="cancel" variant="secondary" className="authenticationBtn" onClick={handleCloseEditProfile}>Cancel</Button>
                        </Form>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}

function MainTabs() {
    return (
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