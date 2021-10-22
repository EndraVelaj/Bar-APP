import {Switch, Route } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import AdminPage  from './components/AdminPage/AdminPage';
import LogIn from './components/LogIn/LogIn';
import Register from './components/Register/Register';
import ConfirmPage from './components/ConfirmPage/ConfirmPage';
import ProductTable from './components/AdminPage/products';


function Routes() {

  return (
    <div className="Routes">
        <Switch>
            <Route path="/" exact component={LogIn}/>
            <Route path="/register" exact component={Register}/>
            <Route path="/mainPage" exact component={MainPage} />
            <Route path="/products" exact component={ProductTable} />
            <Route path="/konfirmo-blerjen/:id/:emri/:cmimi" component={ConfirmPage} />
            <Route path="/adminPage" component={AdminPage} />
            <Route component={LogIn} />
        </Switch>
    </div>
  );
}

export default Routes;
