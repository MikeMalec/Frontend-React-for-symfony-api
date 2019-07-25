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
            <Route exact path='/posts' component={Post} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
