
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Homepage from './views/Homepage';
import Profile from './views/Profile';
function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/profile/:searchQuery" component={Profile} />
            <Redirect to="/" />
        </Switch>
    )
}
export default Routes;