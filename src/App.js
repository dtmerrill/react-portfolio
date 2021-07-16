import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cards from "./components/Cards";
import Home from "./pages/Home";

function App() {
  return (
    <div>
           <Navbar />
      <Header />


      <img alt="Missing graphic" src="images/" />
      <Cards />
      <Home />
      <Footer/>
      {/* <Card /> */}
    </div>
  );
}

export default App;
