import CreateUser from 'pages/CreateUser';
import Home from 'pages/Home';
import Login from 'pages/Login';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Login />
                </Route>
                <Route path="/home" exact>
                    <Home />
                </Route>
                <Route path="/create-user" exact>
                    <CreateUser />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
