import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import { popper } from 'bootstrap';
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
		            <li className="nav-item dropdown">
				        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				          Activity
				        </a>
				        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
				          <a className="dropdown-item" href="#"><Link to={'/active-7'}>Past 7 Days</Link></a>
				          <a className="dropdown-item" href="#"><Link to={'/active-15'}>Past 15 Days</Link></a>
				           <a className="dropdown-item" href="#"><Link to={'/active-30'}>Past 30 Days</Link></a>
				        </div>
				      </li>
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
