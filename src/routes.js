
import React from 'react';
import {Switch, Route} from 'react-router-dom';
import MainPage from './components/MainPage/mainPage';
import ConfirmPage from './components/paneliKonfirmo/butonikonfirmo';
import App from "./App";

 function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={App}/>
            <Route path="/mainPage" exact component={MainPage}/>
            <Route path="/konfirmo-blerjen/:id/:emri/:cmimi" component={ConfirmPage}/>
        </Switch>
    );
}

export default Routes;