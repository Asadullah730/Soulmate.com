import React from "react";
import Header from "./components/Header";
import Slider from "./components/Caroausel";
import Footer from "./components/Footer";
import Trusted from "./components/Trusted";
import Navbar from "./components/Navbar";
import Profiles from "./components/Profiles";

const Home = () =>{
  return (
    <>  
    {/* <Profiles/> */}
      <div className="App">
        <Header />
      </div>
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
