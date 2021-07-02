import { Header } from "./components/Header";
import { Core } from "./components/Core";
// import { Failstack } from "./components/Failstack";
// import { EnhanceButton } from "./components/EnhanceButton";
// import { GlobalProvider } from "./context/GlobalState";
// import { useState } from "react";
import "./App.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

function App() {
  return (
    <Container fluid>
      <Header />
      <div className="container2">
        <Core />
      </div>
    </Container>
  );
}

export default App;
