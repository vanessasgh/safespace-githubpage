import logo from './logo.png';
import './App.css';
import OnboardingPage from './onboardingPage';
import { Route, Switch, Link, Redirect, NavLink } from "react-router-dom";
import AboutUsPage from './aboutUsPage';
import SignInPage from './signInPage';
import SignUpPage from './signUpPage';
import ResourcePage from './resourcePage';
import ProfilePage from './profilePage';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

import { Nav, NavDropdown, MenuItem } from "react-bootstrap";

function App(props) {
  // TODO: implement other pages to render
  const renderOnboardingPage = (routerProps) => {
    return <OnboardingPage {...routerProps} props={props} />
  }
  const renderAboutUsPage = (routerProps) => {
    return <AboutUsPage {...routerProps} props={props} />
  }
  const renderSignInPage = (routerProps) => {
    return <SignInPage {...routerProps} props={props} />
  }
  const renderSignUpPage = (routerProps) => {
    return <SignUpPage {...routerProps} props={props} />
  }
  const renderResourcePage = (routerProps) => {
    return <ResourcePage {...routerProps} props={props} />
  }
  const renderProfilePage = (routerProps) => {
    return <ProfilePage {...routerProps} props={props} />
  }

  return (
    <div>
      <Header />
      <div className='mainContent'>
        <Switch>
          {/* TODO: Add the other pages */}
          <Route exact path="/onboarding" render={renderOnboardingPage} />
          <Route path="/aboutus" render={renderAboutUsPage} />
          <Route path="/login" render={renderSignInPage} />
          <Route path="/signup" render={renderSignUpPage} />
          <Route path="/resources" render={renderResourcePage} />
          <Route path="/profile" render={renderProfilePage} />
          <Redirect to="/onboarding" />
        </Switch>
      </div>
    </div>
  )
}

function Header() {
  return (
    <header>
      <nav className="navBar">
        <Link to="/onboarding"><img src={logo} alt="logo" className="logoImg"></img></Link>
        <Nav className="justify-content-end">
          <Nav.Item>
            <Nav.Link href="/home">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/resources">Resources</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/aboutus">About Us</Nav.Link>
          </Nav.Item>
          <NavDropdown eventKey={2} title="Profile" id="basic-nav-dropdown">
            <Dropdown.Item eventKey={2.1} href="/profile">
              View my profile
            </Dropdown.Item>
            <Dropdown.Item eventKey={2.2} href="/login">
              Sign Out
            </Dropdown.Item>
          </NavDropdown>
        </Nav>
      </nav>
    </header>
  );
}

export default App;
