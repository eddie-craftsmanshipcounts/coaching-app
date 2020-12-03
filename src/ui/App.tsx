import React, {FunctionComponent} from 'react';
import './App.css';
import {Link, Route} from "react-router-dom";
import Home from "./pages/home/Home";
import SignIn from './pages/sign-in/SignIn';

const AppHeader: FunctionComponent = () => {
    return (<>
        <header className='app-header'>
            <Link to='/sign-in'>Sign-In</Link>
        </header>
    </>);
};

const AppContent: FunctionComponent = () => {
    return (<>
        <Route exact path='/' component={Home}/>
        <Route path='/sign-in' component={SignIn}/>
    </>);
};

function App() {
    return (<>
        <div className='App'>
            <div className='App__header'>
                <AppHeader/>
            </div>
            <div className='App__content'>
                <AppContent />
            </div>
        </div>
    </>);
}

export default App;
