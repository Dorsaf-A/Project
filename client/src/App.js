import React,{useEffect} from "react"
import {BrowserRouter} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavBar from "./components/appNavBar";
import Footer from "./components/Footer";


function App() {
  return (
    <BrowserRouter>
    <AppNavBar/>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
