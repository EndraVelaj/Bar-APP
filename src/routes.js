
import React from 'react';
import {Switch, Route} from 'react-router-dom';
import MainPage from './components/mainPage';
import ConfirmPage from './components/butonikonfirmo'
import App from "./App";
import Produktet from './components/products';

 function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={MainPage}/>
            <Route path="/app" exact component={App}/>
            <Route path="/konfirmo-blerjen/" component={ConfirmPage}/>
        </Switch>
    );
}

export default Routes;