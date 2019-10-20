import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import './index.css';
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
    useHistory,
    useLocation,
} from 'react-router-dom';
import Header from './View/components/header';
import Footer from './View/components/footer';
import LoginPage from './View/components/login-page';
import HomePage from './View/home-page';
import NotFound from './View/components/not-found';
import SearchResults from './View/components/search-results';
import ProductDetails from './View/components/product-details-page';
import Checkout from './View/components/checkout';
import CheckoutConfirmation
    from './View/components/checkout-confirmation';
import OrderSuccess from './View/components/order-success';
import OrderReport from './View/components/order-report';
import ProductReport from './View/components/product-report';
import userConfig from './storage/user-config';

let isAuthenticated = false;
const isEng = false;

userConfig.setUserId('Khang');

// function PrivateRoute({ children, ...rest }) {
//     return (
//       <Route
//         {...rest}
//         render={({ location }) =>
//           fakeAuth.isAuthenticated ? (
//             children
//           ) : (
//             <Redirect
//               to={{
//                   pathname: "/login",
//                   state: { from: location }
//               }}
//             />
//           )
//         }
//       />
//     );
// }

function setAuthentication(value) {
    isAuthenticated = value;
    ReactDOM.render(routing, document.getElementById('root'));
}

function renderLoginPage() {
    return (<LoginPage authenCallback={setAuthentication.bind(this)}/>);
}

function renderHeader() {
    return (<Header isEng={isEng}/>);
}

function renderFooter() {
    return (<Footer isEng={isEng}/>);
}

function renderContent() {
    // return (
    //   <div>
    //       {renderHeader()}
    //       <div>
    //           <Switch>
    //               <Redirect exact from="/" to="searchDashboard" />
    //               <Route path="/login">
    //                   <LoginPage />
    //               </Route>
    //               <PrivateRoute path="/protected">
    //                   <ProtectedPage />
    //               </PrivateRoute>
    //               <Route exact path="/" component={HomePage}/>
    //               {/*<Route exact path="/admin" component={AddMoreUniversity}/>*/}
    //               {/*<Route exact path="/university/:universityId?"*/}
    //               {/*       render={(props) =>*/}
    //               {/*         <UniversityDetailPage {...props} />}/>*/}
    //               <Route component={NotFound}/>
    //           </Switch>
    //       </div>
    //       {renderFooter()}
    //   </div>
    // );
}

const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
        fakeAuth.isAuthenticated = true;
        setTimeout(cb, 100); // fake async
    },
};

const r = (
    <Router>
        {renderHeader()}
        <div>
            <Switch>
                <Route exact path="/"
                       render={(props) =>
                           <HomePage{...props}
                                    isEng={isEng}/>}
                />
                <Route path="/search-result"
                       render={(props) =>
                           <SearchResults{...props}
                                         isEng={isEng}/>}
                />
                <Route exact path="/product/:productId?"
                       render={(props) =>
                           <ProductDetails {...props} isEng={isEng}/>}
                />
                <Route exact path="/checkout"
                       render={(props) =>
                           <Checkout{...props}
                                    isEng={isEng}/>}
                />
                <Route exact path="/checkout/confirmation"
                       render={(props) =>
                           <CheckoutConfirmation{...props}
                                                isEng={isEng}/>}/>
                <Route exact path="/order-success/:orderId?"
                       render={(props) =>
                           <OrderSuccess{...props}
                                                isEng={isEng}/>}/>
                <Route exact path="/order-report/:filter?"
                       render={(props) =>
                           <OrderReport{...props}
                                       isEng={isEng}/>}
                />
                <Route exact path="/product-report/:vendorId?"
                       render={(props) =>
                           <ProductReport{...props}
                                       isEng={isEng}/>}
                />
                <Route component={NotFound}/>
            </Switch>
        </div>
        {renderFooter()}
    </Router>
);

const routing = (
    <Router>
        <Switch>
            <Route path="/login">
                <Login/>
            </Route>
            <PrivateRoute path="/p">
                <Router>
                    {renderHeader()}
                    <div>
                        <Switch>
                            <Route path="/home" component={HomePage}/>
                            <Route path="/search-result"
                                   render={(props) =>
                                       <SearchResults{...props}/>}/>
                            <Route exact path="/product/:productId?"
                                   render={(props) =>
                                       <ProductDetails {...props} />}/>
                            <Route component={NotFound}/>
                        </Switch>
                    </div>
                    {renderFooter()}
                </Router>
            </PrivateRoute>
        </Switch>
    </Router>
);

function PrivateRoute({children, ...rest}) {
    return (
        <Route
            {...rest}
            render={({location}) =>
                fakeAuth.isAuthenticated ?
                    (
                        children
                    ) :
                    (
                        <Redirect
                            to={{
                                pathname: '/login',
                                state: {from: location},
                            }}
                        />
                    )
            }
        />
    );
}

function Login() {
    let history = useHistory();
    let location = useLocation();

    let {from} = location.state || {from: {pathname: '/p/home'}};
    let login = () => {
        fakeAuth.authenticate(() => {
            history.replace(from);
        });
    };

    return (
        <LoginPage onClick={login}/>
    );
}

ReactDOM.render(r, document.getElementById('root'));

