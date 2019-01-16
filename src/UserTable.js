import React, { Component } from 'react';
import { fire } from './fire.js'
import UserTableRow from './UserTableRow.js';

class UserTable extends Component {
  constructor(props){
    super(props);
    this.state = {
      items: {}
    }
  }

  
  itemsRef = fire.database().ref('/');

  componentWillMount(){
      this.itemsRef.once('value', data => {
        this.setState({
          items: data.val()
        })
      })
   } 



  render(){
    //this.state.items.sort((a, b) => a['Store Name'] > b['Store Name'])
    let lis = []

    let paidUser = [];
    let allUsers = [];

    let userType = [];

    console.log(this.props.userType)

    for(let i in this.state.items){

        

        allUsers[i] = this.state.items[i]['Big Cartel Domain'];
        paidUser[i] = this.state.items[i]['License Key'] && this.state.items[i]['License Key'].indexOf('#') == -1;

        if (this.props.userType == 'all-users') {
          userType[i] = allUsers[i];
        } else if(this.props.userType == 'paid-users') {
          userType[i] = paidUser[i];
        }
        

       if(userType[i]){
          lis.push(
            <tr key={i}>
              <td>{this.state.items[i]['Logo Image URL'] != '' && <img src={this.state.items[i]['Logo Image URL']} width='80'/>}</td>
              <td><span>{this.state.items[i]['Store Name']}</span></td>
              <td><a href={this.state.items[i]['Big Cartel Domain']} target='_blank'>{this.state.items[i]['Big Cartel Domain']}</a></td>
              <td>{this.state.items[i]['License Key']}</td>
              <td>{this.state.items[i]['Contact Email'] != 'email@example.com' ? this.state.items[i]['Contact Email'] : 'N/A'}</td>
              <td>{this.state.items[i]['Last Updated']}</td>
              <td><a href={this.state.items[i]} className="btn btn-sm btn-primary">More info <i className="fa fa-caret-right"></i></a></td>
            </tr>
          )
      }
    }
    return (
      <div className="container-fluid">
        <table className="table table-responsive table-striped header-fixed border border-1 shadow">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Store Name <i className="fa fa-sort"></i></th>
              <th scope="col">Big Cartel Domain</th>
              <th scope="col">License Key</th>
              <th scope="col">Contact Email</th>
              <th scope="col">Last Updated <i className="fa fa-sort"></i></th>
              <th scope="col" width="150"></th>
            </tr>
          </thead>
          <tbody>
          { lis }
          </tbody>
        </table>
      </div>
    )
  }
}


export default UserTable;
