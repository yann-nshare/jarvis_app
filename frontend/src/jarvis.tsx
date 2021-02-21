import React from 'react';
import Avatar from '@material-ui/core/Avatar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Dropdown,Navbar,Card, DropdownButton} from 'react-bootstrap';
import Body from './body';
import Footer from './footer';
import Header from './home';
import {Router, Link, Route} from 'react-router-dom';
import Abonnement from './abonnement';
import Connection_page from './connection_page'
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


      <Route exact path="/Community" component={Community}>
        <Community/>
      </Route>
      
      <Route exact path="/connection" component={Connection_page}>
        <Connection_page/>
      </Route>
     <Footer/>
    </div>
  )
}

export default page_nav;
