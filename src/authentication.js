import React from 'react';
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
} from 'react-router-dom';
import fakeAuth, { isEng } from './fake-auth-data';
import HomePage from './View/home-page';
import SearchResults from './View/components/search-results';
import ProductDetails from './View/components/product-details-page';
import Checkout from './View/components/checkout';
import CheckoutConfirmation
    from './View/components/checkout-confirmation';
import OrderSuccess from './View/components/order-success';
import OrderReport from './View/components/order-report';
import ProductReport from './View/components/product-report';
import NotFound from './View/components/not-found';
import Header from './View/components/header';
import Footer from './View/components/footer';
import LoginPage from './View/components/login-page';


export default function Authentication() {
    return (
        <Router>
            <Switch>
                <Route path="/login"
                       render={(props) =>
                           <LoginPage{...props}/>}
                />
                <PrivateRoute path="/"/>
            </Switch>
        </Router>
    );
}

function PrivateRoute({children, ...rest}) {
    console.log(rest);
    return (
        <Route
            {...rest}
            render={({location}) => {
                return (
                    fakeAuth.isAuthenticated ?
                        <Router>
                            <Header isEng={isEng}/>
                            <Switch>
                                <Route exact path="/home"
                                       render={(props) =>
                                           <HomePage{...props}
                                                    isEng={isEng}/>}
                                />
                                <Route exact
                                       path="/search-result"
                                       render={(props) =>
                                           <SearchResults{...props}
                                                         isEng={isEng}/>}
                                />
                                <Route exact path="/product/:productId?"
                                       render={(props) =>
                                           <ProductDetails {...props}
                                                           isEng={isEng}/>}
                                />
                                <Route exact
                                       path="/checkout"
                                       render={(props) =>
                                           <Checkout{...props}
                                                    isEng={isEng}/>}
                                />
                                <Route exact
                                       path="/checkout/confirmation"
                                       render={(props) =>
                                           <CheckoutConfirmation{...props}
                                                                isEng={isEng}/>}/>
                                <Route exact
                                       path="/order-success/:orderId?"
                                       render={(props) =>
                                           <OrderSuccess{...props}
                                                        isEng={isEng}/>}/>
                                <Route exact
                                       path="/order-report/:filter?"
                                       render={(props) =>
                                           <OrderReport{...props}
                                                       isEng={isEng}/>}
                                />
                                <Route exact
                                       path="/product-report/:vendorId?"
                                       render={(props) =>
                                           <ProductReport{...props}
                                                         isEng={isEng}/>}
                                />
                                <Route component={NotFound}/>
                            </Switch>
                            <Footer isEng={isEng}/>
                        </Router>
                        :
                        <Redirect
                            to={{
                                pathname: '/login',
                                state: {from: location},
                            }}
                        />
                );
            }
            }
        />
    );
}