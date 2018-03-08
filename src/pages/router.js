/**
 * Created by vincent.yan on 2018/3/6.
 */
import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Home from './home/index';
import Movie from './movie/index';
import  Master from './master'

const router = (
    <Router>
        <Master>
            <Switch>
                <Route path="/home" component={Home}/>
                <Route path="/movie" component={Movie}/>
            </Switch>
        </Master>
    </Router>
)
export default router;
