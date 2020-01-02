import React, { Component } from 'react';
import Header from "./Components/Header/Header";
import Card from "./Components/Card/Card";
import axios from"axios";

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
      this.state = {
        search: "",
        filter: "users"
      }
    this.setSearch = this.setSearch.bind(this);
  }

  setSearch = (value) => {
    this.setState({ search: value  });
    
    console.log(this.state.search)
  }

  render(){
    return(
      <div>
        <Header setSearch={this.setSearch} />
        <Card search={this.state.search}/>
      </div>
    );
  }
}
export default App;
