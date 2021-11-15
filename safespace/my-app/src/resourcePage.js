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
                    <li className="TedTalkCitation">TEDx Talks. (2018). From suicidal to hopeful, how I learnt to fight . Youtube.</li>
                </li>
                <br></br>
                <h3 className="saveOrgArticleTitle">Suicide Awareness Voice of Education</h3>
                <iframe src="https://save.org/find-help/im-having-suicidal-thoughts/" height="400px" width="600px" title="Suicide Awareness Voice of Education"></iframe>
                <li className="suicidalThoughtsCitation"><a href="https://save.org/find-help/im-having-suicidal-thoughts/." target="_blank">I'm Having Thoughts of Suicide</a>. SAVE. (n.d.).</li>
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
                    <li className="mentalHealthVideoCitation">Psych2Go. (2021, April 5). 8 things you can do to improve your mental health - youtube. Youtube.</li>
                </li>
                <br></br>
                <h3 className="mentalHealthTipsTitle">31 Tips to Boost Your Mental Health</h3>
                <iframe src="https://www.mhanational.org/31-tips-boost-your-mental-health" height="400px" width="600px" title="31 Tips to Boost Your Mental Health"></iframe>
                <li className="mentalHealthTipsCitation"><a href="https://www.mhanational.org/31-tips-boost-your-mental-health" target="_blank">31 Tips to Boost Your Mental Health</a>. Mental Health America. (n.d.).</li>
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
