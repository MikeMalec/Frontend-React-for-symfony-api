import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Navbar from './components/layouts/Navbar';
import Home from './components/pages/Home';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Post from './components/posts/Post';
import Notification from './components/layouts/Notification';
import Alert from './components/layouts/Alert';
import PostForm from './components/posts/PostForm';
import PrivateRoute from './components/routing/PrivateRoute';
import UserPosts from './components/posts/UserPosts';
import EditForm from './components/posts/EditForm';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <div className='container'>
          <Notification />
          <Alert />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />
            <PrivateRoute exact path='/createPost' component={PostForm} />
            <PrivateRoute exact path='/myPosts' component={UserPosts} />
            <PrivateRoute exact path='/editPost' component={EditForm} />
            <Route exact path='/posts/:id' component={Post} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
