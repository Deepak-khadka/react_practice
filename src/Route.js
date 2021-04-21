import React, {Component} from 'react';
import { BrowserRouter ,Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Nav from "../src/View/Includes/nav";
import Profile from "./View/Profile/profile";
import UserList from "./View/Pages/userList";
import Home from "./View/Home/Home";

const PublicRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={(routeProps) => (
            <>
                <div style={{marginTop: "65px"}}>
                    <Nav/>
                    <Component {...routeProps} />
                </div>
            </>
        )}>
        </Route>
    )
}

class RoutePage extends Component {
    render() {
        return (
            <>
                <BrowserRouter>
                    <Switch>
                        <PublicRoute exact path="/" component={ Home }/>
                        <PublicRoute exact path="/user-list" component={ UserList }/>
                        <PublicRoute exact path="/profile" component={ Profile }/>
                    </Switch>
                </BrowserRouter>
            </>
        );
    }
}

export default RoutePage;
