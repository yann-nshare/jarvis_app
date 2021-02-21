import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Body from './body';
import Footer from './footer';
import Header from './home';
import { Route } from 'react-router-dom';
import Abonnement from './abonnement';
import Register_page from './register_page'
import Login_page from './login_page'
import Community from './community'

function page_nav() {
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
     <Footer/>
    </div>
  )
}

export default page_nav;
