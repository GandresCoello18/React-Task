import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ViewUser from '../view/home'
import PostView from '../view/post'
import CommentPostView from '../view/comment'

const RouterApp = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={ViewUser} />
                <Route exact path="/post/:idUser" component={PostView} />
                <Route exact path="/commnet/:idPost" component={CommentPostView} />
            </Switch>
        </BrowserRouter>
    )
}

export default RouterApp