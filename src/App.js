import './App.css';
import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import Feed from './Components/Feed/Feed';
import Profile from './Components/Profile/Profile';
import { UserContext } from './UserContext';
import usersdata from '../src/jsonStore/users.json'


function App() {
  const store = createStore(reducers);
  const [users, setUsers] = useState([...usersdata]);
  const [cuser, setCuser] = useState({
    "uid": 113,
    "name": "Jane Doe"
  })


  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <UserContext.Provider value={{ users, setUsers, cuser}}>
            <Navbar />
            <Switch>
              <Route exact path="/">
                <Feed />
              </Route>
              <Route path="/profile/:uid">
                <Profile />
              </Route>
            </Switch>
          </UserContext.Provider>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
