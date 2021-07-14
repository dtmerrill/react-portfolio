import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Card1 from "./components/Cardpyp";
import Card2 from "./components/Cardpw";
import Cards from "./components/Cards";

// In our main App component, we are rendering only single instances of Header and Navbar and several instances of Card
function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Card1 />
      <Card2 />
      <img alt="Missing graphic" src="images/" />
      <Cards />
      {/* <Card /> */}
    </div>
  );
}

export default App;
