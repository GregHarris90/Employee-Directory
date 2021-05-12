import React from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import Employee from "./components/Employee";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";


function App() {
  return (
    <div>
      <Wrapper>
        <Header />
        <Search />
        <Employee />
        <Footer />
      </Wrapper>
    </div>
  );
}

export default App;
