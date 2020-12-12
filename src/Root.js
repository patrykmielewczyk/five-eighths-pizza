import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import About from './views/About/About';
import Order from './views/Order/Order';
import Contact from './views/Contact/Contact';
import Cart from './views/Cart/Cart';

function Root() {
    return (
        <Provider store={store}> 
        <BrowserRouter>
        <Header/>
        <Switch>
            <Route exact path="/" render={() => <Redirect to="/about"/>}/>
            <Route exact path="/about" component={About}/>
            <Route path ="/order" component={Order}/>
            <Route path ="/cart" component={Cart}/>
            <Route path ="/contact" component={Contact}/>
        </Switch>
        <Footer/>
        </BrowserRouter>
        </Provider>
    )
}

export default Root;
