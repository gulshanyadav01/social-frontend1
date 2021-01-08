import React, { Fragment, useEffect } from "react"; 
import Navbar from "./components/Layout/Navbar"; 
import Landing from "./components/Layout/Landing"; 
import  { Provider } from "react-redux"; 
import  store  from "./components/store/store";
import Alert from "./components/Layout/alert"; 
import { loadUser } from "./components/store/Actions/auth"
import setAuthToken from "./utils/setAuthToken";

if(localStorage.token){
  setAuthToken(localStorage.token);
}




const  App = () =>  {
  useEffect(() => {
    store.dispatch(loadUser());
  },[])
  return (
    <Provider store = {store}>
    <>
    <h1>hello</h1>
    <Alert/>
    <Navbar/>
    <Landing/>
    </>
    </Provider>
  );
}

export default App
