import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route, Redirect
} from "react-router-dom";

import './app.less';
import { Dashboard } from './pages/dashboard';

export const App: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Redirect to="/components/button"/>
                </Route>
                <Route path="/components/:name" exact>
                <Dashboard />
                </Route>
            </Switch>
        </Router>
    );
}