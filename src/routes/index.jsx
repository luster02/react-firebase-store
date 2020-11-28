import React from 'react'
import { Route, Switch } from "react-router-dom";

//pages
import { Home } from '../pages/HomePage'


export function Navigation() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
        </Switch>
    )
}