import React, { Component } from "react";
import MainLayout from "./components/MainLayout";
import CardList from "./components/Cards/CardList";

class App extends Component {
  render() {
    return (
      <MainLayout>
        <CardList />
      </MainLayout>
    );
  }
}

export default App;
