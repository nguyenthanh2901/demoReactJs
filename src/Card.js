import React, { Component } from 'react'

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state ={
      id:"",
      name:"",
      phone:"",
      permission:"",
    }
  }
  
  isChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]:value,
    });

    // var item = {};
    //   item.id = this.state.id;
    //   item.name = this.state.name;
    //   item.phone = this.state.phone;
    //   item.permission = this.state.permission;
    //   console.log(item);
  }
  render() {
    // console.log(this.state)
    return (
      <div className="col-sm-3">
        <h2>Add new user</h2>
        <div className="form-group">
          <label >Name</label>
          <input type="text" name ="name" onChange={(event) => this.isChange(event)} className="form-control" placeholder="Name" aria-describedby="helpId" />
        </div>
        <div className="form-group">
          <label >Phone</label>
          <input type="text" name="phone" onChange={(event) => this.isChange(event)} className="form-control" placeholder="Phone" aria-describedby="helpId" />
        </div>
        <div className="form-group">
          <label >Permission</label>
          <select name="permission"  onChange={(event) => this.isChange(event)} className="form-control"  >
            <option >---Choose One---</option>
            <option value="1">Admin</option>
            <option value="0">User</option>
          </select>
        </div>
        <button type="submit" onClick = {(name,phone,permission) => this.props.addCard(this.state.name,this.state.phone,this.state.permission)} className="btn btn-primary">Submit</button>
      </div>

    )
  }
}
