import { Header } from "./components/Header";
import { Core } from "./components/Core";
// import { Failstack } from "./components/Failstack";
// import { EnhanceButton } from "./components/EnhanceButton";
// import { GlobalProvider } from "./context/GlobalState";
// import { useState } from "react";
import "./App.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container'

function App() {
  return (
    <Container>
      <Header />
        <Core />
        <Button variant="outline-primary">Primary</Button>{' '}
    </Container>
  );
}

export default App;
