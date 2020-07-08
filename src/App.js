import React from 'react';
import { HomeDefault } from './pages';
import Login from './pages/login'
import Register from './pages/register'
import LoggedIn from './pages/logged'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './style/main.scss';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <HomeDefault />
                </Route>

                <Route path="/login" >
                    <Login />
                </Route>

                <Route path="/register" >
                    <Register />
                </Route>
               
            </Switch>
        </Router>
    )
}

export default App;