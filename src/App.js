import React from "react";
import Header from "./components/Header";
import MainBody from "./components/MainBody";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <Wrapper>
        <Header />
        <MainBody />
        <Footer />
      </Wrapper>
    </div>
  )
}

export default App;
