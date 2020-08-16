import React, { Component } from 'react'
import TableContent from './TableContent'

export default class Table extends Component {
  mappingDataUser = () => this.props.dataUserProps.map((value, key) => (
    <TableContent name={value.name} key={key} id={key + 1} phone={value.phone} permission={value.permission} />
  ))
  render() {
    return (
      <div className="col-sm-9">
        <table className="table table-striped table-inverse ">
          <thead className="thead-inverse">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Active</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>

            {this.mappingDataUser()}

          </tbody>
        </table>
      </div>


    )
  }
}
