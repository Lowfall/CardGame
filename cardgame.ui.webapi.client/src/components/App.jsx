import { useEffect, useState } from 'react';
import '../styles/App.css';
import { Route,Routes } from 'react-router-dom';
import Navbar from './Navbar';
import SignIn from './Signin';
import SignUp from './Signup';
import Home from './Home';

function App() {
   return(
    <>
        <Navbar/>
        <div>
            <Routes>
                <Route path='/signin' Component={SignIn}/>
                <Route path='/signup' Component={SignUp}/>
                <Route path='/home' Component={Home}/>
            </Routes>
        </div>
    </>
   )
}

export default App;