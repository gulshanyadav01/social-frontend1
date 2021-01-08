import React, { Fragment, useEffect } from "react"; 
import Navbar from "./components/Layout/Navbar"; 
import Landing from "./components/Layout/Landing"; 
import  { Provider } from "react-redux"; 
import  store  from "./components/store/store";
import Alert from "./components/Layout/alert"; 
import { loadUser } from "./components/store/Actions/auth"
import setAuthToken from "./utils/setAuthToken";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"; 
import Dashboard from "./components/dashboard/Dashboard";
import PrivateRoute from "./components/Routing/PrivateRoute"; 
import CreateProfile from  "./components/profile-form/CreateProfile";

if(localStorage.token){
  setAuthToken(localStorage.token);
}




const  App = () =>  {
  useEffect(() => {
    store.dispatch(loadUser());
  },[])
  return (
    <Provider store = {store}>
      <Router>
        <Navbar/>
        <Landing/>
        <PrivateRoute exact path = "/dashboard" component = {Dashboard}/>
        <PrivateRoute exact path = "/createprofile" component = {CreateProfile}/>
        <Switch>
          <Alert/>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App
