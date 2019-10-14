import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import './index.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Header from './View/components/header';
import Footer from './View/components/footer';
import HomePage from './View/home-page';
import NotFound from './View/components/not-found';

function renderHeader() {
    return (
      <Header/>
    );
}

function renderFooter() {
    return (
      <Footer/>
    );
}

const routing = (
  <Router>
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
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

