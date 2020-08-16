import './App.css';
import Header from './Header';
import Search from './Search';
import Table from './Table';
import Card from './Card';
import DataUser from './Data.json'
import { v4 as uuidv4 } from 'uuid';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: DataUser,
      searchText: '',
    }
  }
  getTextSearch = (dataValue) => {
    this.setState({
      searchText: dataValue
    })
  }
  getCardData = (name,phone,permission) => {
    
    var item = {};
      item.id = uuidv4();
      item.name = name;
      item.phone = phone;
      item.permission = permission;
      // console.log(item);
      let items = this.state.data;
      items.push(item);
      this.setState({
        data:items
      })
      console.log(items)
  }
  render() {
    var result = [];
    this.state.data.forEach(
      (item) => {
        if (item.name.indexOf(this.state.searchText) !== -1) {
          result.push(item);
        }
      })
    return (
      <div className="App">
        <Header />
        <div className="searchForm">
          <div className="container">
            <div className="row">
              <Search checkConnectProps={(dataValue) => this.getTextSearch(dataValue)} />
              <Table dataUserProps={result} />
              <Card addCard = {(name,phone,permission) => this.getCardData(name,phone,permission) } />
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
