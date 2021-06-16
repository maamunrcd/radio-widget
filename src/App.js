import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <MainContent />
        <Footer />
      </div>
    </div>
  );
}

export default App;
