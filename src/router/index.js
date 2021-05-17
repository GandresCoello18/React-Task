import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ViewUser from '../view/home'
import PostView from '../view/post'

const RouterApp = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={ViewUser} />
                <Route exact path="/post" component={PostView} />
            </Switch>
        </BrowserRouter>
    )
}

export default RouterApp