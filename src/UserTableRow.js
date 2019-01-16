import React, { Component } from 'react';

class UserTableRow extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
    )
  }
}

export default UserTableRow;
