import React, { Fragment } from "react"; 
import Navbar from "./components/Layout/Navbar"; 
import Landing from "./components/Layout/Landing"; 
import  { Provider } from "react-redux"; 
import  store  from "./components/store/store";
import Alert from "./components/Layout/alert"; 

const  App = () =>  {
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
