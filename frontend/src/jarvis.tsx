import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Body from './body';
import Footer from './footer';
import Header from './home';
import { Route } from 'react-router-dom';
import Abonnement from './abonnement';
import Register_page from './register_page'
import Login_page from './login_page'
import Profile_page from './profile_page'
import Community from './community'
import About from './about'
import Buy from './buy'

export function page_nav() {
  return (
    <div className="page_nav">
      <Header/>
      <Route exact path="/" component={Body}>
     <Body/>
      </Route>
      <Route exact path="/pricing" component={Abonnement}>
        <Abonnement/>
      </Route>
      <Route exact path="/community" component={Community}>
        <Community/>
      </Route>
      <Route exact path="/register" component={Register_page}>
        <Register_page/>
      </Route>
      <Route exact path="/login" component={Login_page}>
        <Login_page/>
      </Route>
      <Route exact path="/profile" component={Profile_page}>
        <Profile_page/>
      </Route>
      <Route exact path="/about" component={About}>
        <About/>
      </Route>
      <Route exact path="/buy" component={Buy}>
        <Buy/>
      </Route>
     <Footer/>
    </div>
  )
}

export default page_nav;
