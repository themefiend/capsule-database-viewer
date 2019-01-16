import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { fire } from './fire.js'
import UserTable from './UserTable.js';
//import { FirebaseDatabaseProvider } from "@react-firebase/database";


class App extends Component {

  render() {
    return (
      <div className="App p-5">
        <BrowserRouter>  
	        <div className="wrap">
	          <h2>Capsule theme: User Management</h2>
	          <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
		          <ul className="navbar-nav mr-auto">
		            <li className="nav-item"><a className="nav-link" href="#"><Link to={'/all-users'}>All Users</Link></a></li>
		            <li className="nav-item"><a className="nav-link" href="#"><Link to={'/paid-users'}>Paid Users</Link></a></li>
		          </ul>
	          </nav>
	          <Route exact path="/all-users" render={props => <UserTable userType="all-users"/>}  />
	          <Route exact path="/paid-users" render={props => <UserTable userType="paid-users" />}  />
	        </div>
	      </BrowserRouter> 
      </div>
    );
  }
}

export default App;
