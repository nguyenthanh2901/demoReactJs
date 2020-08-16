import React, { Component } from 'react'

export default class TableContent extends Component {

  permissionContent = () => {
    if (this.props.permission == 0) return "User";
    else return "Admin";
  }
  render() {
    return (
      <tr>
        <td >{this.props.id}</td>
        <td>{this.props.name}</td>
        <td>{this.props.phone}</td>
        <td>{this.permissionContent()}</td>
        <td>
          <div className="btn-group">
            <div className="btn btn-info">Delete</div>
            <div className="btn btn-danger">Fix</div>
          </div>
        </td>
      </tr>

    )
  }
}
