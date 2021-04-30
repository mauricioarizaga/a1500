import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
  } from "react-router-dom";

import { Home } from '../components/home/Home';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

    return (
            <Router>
                <div>
                    <Switch>
                        
                        <PublicRoute path = '/'
                        exact component = { Home }
                        />

                        <Redirect to = '/' />

                    </Switch>
                </div>
            
            </Router>
    )
};