import React, { Component } from 'react'

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tempValue: ''
    }
  }

  isChange = (event) => {
    this.setState({
      tempValue: event.target.value
    });
    // this.props.checkConnectProps(this.state.tempValue);
  }
  render() {
    return (
      <div><div>
        <div className="col-12">
          <div className="form-group">
            <div className="btn-group">
              <input type="text" className="form-control" onChange={(event) => this.isChange(event)} placeholder="Searching" />
              <div onClick={(dataValue) => this.props.checkConnectProps(this.state.tempValue)} className="btn btn-info">Search</div>
            </div>
          </div>
        </div>
        <div className="col-12"><hr /></div>
      </div>


      </div>
    )
  }
}
