import logo from './logo.png';
import './App.css';
import OnboardingPage from './onboardingPage';
import { Route, Switch, Link, Redirect, NavLink } from "react-router-dom";

function App(props) {
  // TODO: implement other pages to render
  const renderOnboardingPage = (routerProps) => {
    return <OnboardingPage {... routerProps} props={props}/>
  }

  return (
    <div>
      <Header />
      <div className='mainContent'>
        <Switch>
          {/* TODO: Add the other pages */}
          <Route exact path="/onboarding" render={renderOnboardingPage} />
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
        <ul>
          <li className="navList"><NavLink exact to="/home" className="navLink">Home</NavLink></li>
          <li className="navList"><NavLink to="/resources" className="navLink">Resources</NavLink></li>
          <li className="navList"><NavLink to="/aboutus" className="navLink">About Us</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}


export default App;
