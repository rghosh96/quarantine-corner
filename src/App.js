import React from 'react';
import './_main.scss';
import Navigation from './components/layout/Navigation.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Queries from './components/dashboard/Queries';
import KitInfo from './components/kits/KitInfo';
import SignInPage from './components/auth/SignInPage';
import SignUpPage from './components/auth/SignUpPage';
import AddKit from './components/kits/AddKit';


function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route exact path='/' component={Queries} />
        <Route path='/kit/:id' component={KitInfo} />
        <Route path='/signin' component={SignInPage} />
        <Route path='/signup' component={SignUpPage} />
        <Route path='/addkit' component={AddKit} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
