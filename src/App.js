import React,{useEffect,useContext} from 'react';
import {BrowserRouter as Router , Route} from 'react-router-dom'
import './App.css';
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import { AuthContext, FirebaseContext } from './store/Context'
import Create from './Pages/Create'
import View from './Pages/ViewPost'
import Post from './store/PostContext'
/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';

function App() {
  const {setUser} = useContext(AuthContext)
  const {firebase}= useContext(FirebaseContext)

  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      // user login aano alleyo check cheynath aan
      setUser(user)
    })
  })
  return (
    <div>
      <Post>
      <Router>
      <Route exact path='/'>
      <Home />
      </Route>
      <Route path='/signup'>
      <Signup />
      </Route>
      <Route path='/login'>
      <Login />
      </Route>
      <Route path='/create'>
      <Create />
      </Route>
      <Route path='/view'>
      <View />
      </Route>
    </Router>
    </Post>
    </div>
  );
}

export default App;
