import React from "react";
import './App.css';
import Header from './Header';
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";

function App() {
  return (
    //BEM class naming convention
    <div className="app">
      {/* <h1>Leet's build the MERN TINDER clone guy!!!</h1> */}
      <Header />
      <TinderCards />
      <SwipeButtons />
    </div>
  );
}

export default App;
