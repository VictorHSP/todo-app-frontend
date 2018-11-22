import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Todo from '../todo/todo'
import About from '../about/about'

export default props => (
    <Router history={hashHistory}>
        <Route component={Todo} path='/todos'/>
        <Route component={About} path='/about'/>
        <Redirect from='*' to='/todos'/>
    </Router>
)
