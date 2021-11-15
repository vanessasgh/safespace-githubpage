import React, { useState } from 'react'
import { InputGroup, FormControl, Button, Container, Row, Col, Image } from 'react-bootstrap'
import test from './mapPlaceholder.jpg'
import ReactPlayer from 'react-player'

function ResourcePage() {
    return (
        <div className="mainContentDiv">
            <div className="mainHeaderDiv">
                <h1 className="mainTitleText">Resources</h1>
            </div>
            <div className="contentDiv">
                {recoveryPage()}
                {betterHabitsPage()}
                {gettingHelpPage()}
            </div>
        </div>
    )
}

function recoveryPage() {
    return (
        <div>
            <h2 className="resourcesContentDiv">First Steps to Recovery</h2>
            <ul className="resourcesLists">
                <li>
                <br></br>
                    <div alt="From suicidal to hopeful, how I learnt to fight | Jazz Thornton | TEDxAuckland">
                        <ReactPlayer url="https://www.youtube.com/watch?v=h2au58zB_kk"/>
                    </div>
                </li>
                <li><a href="https://save.org/find-help/im-having-suicidal-thoughts/.">Suicide Awareness Voice of Education</a></li>
            </ul>
        </div>
    )
}

function betterHabitsPage() {
    return (
        <div>
            <h2 className="resourcesContentDiv">Building Better Habits</h2>
            <ul className="resourcesLists">
                <li>
                <br></br>
                    <div alt="8 Things You Can Do To Improve Your Mental Health">
                        <ReactPlayer url="https://www.youtube.com/watch?v=3QIfkeA6HBYk"/>
                    </div>
                    <li className="mentalHealthVideoCitation">Psych2Go. (2021, April 5). 8 things you can do to improve your mental health - youtube. Youtube. Retrieved November 14, 2021, from https://www.youtube.com/watch?v=3QIfkeA6HBY.</li>
                </li>
                <br></br>
                <h3 className="mentalHealthTipsTitle">31 Tips to Boost Your Mental Health</h3>
                <li className="mentalHealthTipsLink"><a href="https://www.mhanational.org/31-tips-boost-your-mental-health">31 Tips to Boost Your Mental Health</a></li>
                <li className="mentalHealthTipsCitation">31 tips to boost your mental health. Mental Health America. (n.d.). Retrieved November 14, 2021, from https://www.mhanational.org/31-tips-boost-your-mental-health.</li>
            </ul>
        </div>
    )
}

function gettingHelpPage() {
    return (
        <div>
            <h2 className="resourcesContentDiv">Getting Help Near You</h2>
            <Container>
                <Row>
                    <Col md={4}>
                        <InputGroup className="mb-3">
                            <FormControl
                            placeholder="Current location"
                            aria-label="Current location"
                            />
                            <Button variant="outline-secondary" id="button-addon2">
                                Search
                            </Button>
                        </InputGroup>
                    </Col>
                </Row>
                <Row>
                    <Image src={test}/>
                </Row>
            </Container>
        </div>
    )
}

export default ResourcePage