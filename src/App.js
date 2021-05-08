import React from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import MainBody from "./components/MainBody";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <div>
      <Wrapper>
        <Header />
        <Search />
        <MainBody />
        <Footer />
      </Wrapper>
    </div>
  );
}

export default App;
