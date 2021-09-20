import AddBook from 'pages/AddBook';
import CreateUser from 'pages/CreateUser';
import EditBook from 'pages/EditBook';
import Home from 'pages/Home';
import Login from 'pages/Login';
import ViewBook from 'pages/ViewBook';
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
                <Route path="/addbook" exact>
                    <AddBook />
                </Route>
                <Route path="/edit" exact>
                    <EditBook />
                </Route>
                <Route path="/view" exact>
                    <ViewBook />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
