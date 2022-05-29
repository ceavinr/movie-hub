import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import RoutesConfig from "./config/RoutesConfig";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Navbar />
      <main>
        <RoutesConfig />
      </main>
      <Footer />
    </GlobalProvider>
  );
}

export default App;
