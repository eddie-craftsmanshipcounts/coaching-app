import React from 'react';
import './App.css';
import {Link, Route} from "react-router-dom";
import Home from "./Home";
import SignIn from './SignIn';

function App() {
    return (<>
        <div className='site'>
            <div className='site__header'>
                <header className='site-header'>
                    <Link to='/sign-in'>Sign-In</Link>
                </header>
            </div>
            <div className='site__content'>
                <Route exact path='/' component={Home} />
                <Route path='/sign-in' component={SignIn} />
            </div>
        </div>
    </>);
}

export default App;
