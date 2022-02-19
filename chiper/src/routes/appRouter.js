import React, {useState, useEffect} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    Route,
} from "react-router-dom";

import Home from "../pages/home";
import DetailView from "../pages/detailView";


const AppRouter = () => {


    return (
        <Router>
            <Switch>
                <Route exact path="/detail/:id" component={DetailView}/>
                <Route path="/" component={Home}/>
            </Switch>
        </Router>
    );
};

export default AppRouter;







