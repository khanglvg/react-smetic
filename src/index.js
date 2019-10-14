import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import './index.css';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import Header from './View/components/header';
import Footer from './View/components/footer';
import LoginPage from './View/components/login-page';
import HomePage from './View/home-page';
import NotFound from './View/components/not-found';

let isAuthenticated = false;

function setAuthen(value) {
    isAuthenticated = value;
}

function renderLoginPage() {
    return (<LoginPage/>);
}

function renderHeader() {
    return (<Header/>);
}

function renderFooter() {
    return (<Footer/>);
}

function renderContent() {
    return (
      <div>
          {renderHeader()}
          <div>
              <Switch>
                  <Route exact path="/" component={HomePage}/>
                  {/*<Route exact path="/admin" component={AddMoreUniversity}/>*/}
                  {/*<Route exact path="/university/:universityId?"*/}
                  {/*       render={(props) =>*/}
                  {/*         <UniversityDetailPage {...props} />}/>*/}
                  <Route component={NotFound}/>
              </Switch>
          </div>
          {renderFooter()}
      </div>
    );
}

const routing = (
  <Router>
      {
          !isAuthenticated ?
            renderLoginPage()
            :
            renderContent()
      }

  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

