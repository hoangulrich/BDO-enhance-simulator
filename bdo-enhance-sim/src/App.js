import { Header } from "./components/Header";
import { Core } from "./components/Core";
// import { Failstack } from "./components/Failstack";
// import { EnhanceButton } from "./components/EnhanceButton";
// import { GlobalProvider } from "./context/GlobalState";
// import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Core />
      </div>
    </>
  );
}

export default App;
