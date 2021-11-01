import logo from './logo.svg';
import './App.css';

function App() {
  // TODO: implement other pages to render
  // const renderOnboardingPage = (routerProps) => {
  //   return <OnboardingPage {... routerProps} props={props}/>
  // }

  return (
    <div>
      {/* <Header /> */}
      <div className='mainContent'>
        <Switch>
          {/* TODO: Add the other pages */}
          {/* <Route exact path="/onboarding" render={renderOnboardingPage} />
                <Redirect to="/onboarding" /> */}
        </Switch>
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default App;
