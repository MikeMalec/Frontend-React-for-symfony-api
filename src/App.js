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
import UserProfile from './components/userProfile/UserProfile';
import ShowUserProfile from './components/userProfile/ShowUserProfile';
import ShowUserPosts from './components/userProfile/ShowUserPosts';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Notification />
        <div className='container'>
          <Alert />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />
            <PrivateRoute exact path='/myProfile' component={UserProfile} />
            <PrivateRoute exact path='/createPost' component={PostForm} />
            <PrivateRoute exact path='/myPosts' component={UserPosts} />
            <PrivateRoute exact path='/editPost' component={EditForm} />
            <Route exact path='/posts/:id' component={Post} />
            <Route
              exacth
              path='/showUserProfile/:id'
              component={ShowUserProfile}
            />
            <Route exacth path='/userPosts/:id' component={ShowUserPosts} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
