import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Home } from './assembly'
export default class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
            </BrowserRouter>
        )
    }
}


