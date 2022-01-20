import logo from "./logo.svg";
import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
import "./App.css";
class App extends Component {
  constructor() {
    super();

    this.state = {
      Monsters: [],
      searchFeild: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((Response) => Response.json())
      .then((user) => this.setState({ Monsters: user }));
  }

  handlechange = (e) => {
    this.setState({ searchFeild: e.target.value });
  };
  render() {
    const { Monsters, searchFeild } = this.state;
    const filteredMonsters = Monsters.filter((mon) =>
      mon.name.toLowerCase().includes(searchFeild.toLowerCase())
    );
    return (
      <div className="App">
      <h1>Users </h1>
        <SearchBox
          placeholder="Search a user"
          handlechange={this.handlechange}
        />
        <CardList Monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
