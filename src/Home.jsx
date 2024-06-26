import React from "react";
import Header from "./components/Header";
import Slider from "./components/Caroausel";
import Footer from "./components/Footer";
import Trusted from "./components/Trusted";
import Navbar from "./components/Navbar";

const Home = () =>{
  return (
    <>  
      <div className="App">
        <Header />
      </div>
      <br />
      <div>
        < Navbar/>
      </div>
      <div>
        <Slider />
      </div>
      <div>
        <Trusted/>
      </div>
      <div>
        <Footer />
      </div>

    </>
  );
};

export default Home;
