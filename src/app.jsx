import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory, Redirect} from 'react-router';
import SiteLayout from './app/layouts/SiteLayout';
import Main from './app/pages/Main';
import PageNotFound from './app/pages/PageNotFound';
import Users from './app/pages/Users';
import Coments from './app/pages/Coments';
import Coment from './app/pages/Coment';
import Blogs from './app/pages/Blogs';
import Blog from './app/pages/Blog';
import User from './app/pages/User';

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={SiteLayout}>
      <IndexRoute component={Main}/>
      <Route path="blogs" component={Blogs}>
        <Route path=":blogId" component={Blog}/>
      </Route>
      <Route path="comments" component={Coments}>
        <Route path=":commentId" component={Coment}/>
      </Route>
      <Route path="users" component={Users}>
        <Route path=":userId" component={User}/>
      </Route>
      <Route path="*" component={PageNotFound}/>
    </Route>
  </Router>
    , app);
