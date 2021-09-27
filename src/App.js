import React, { useEffect, useState } from "react";
import { Container, Row, Button, Col } from "react-bootstrap";
import "./App.css";
import CardList from "./components/CardList";
import { useDispatch } from "react-redux";
import { getData } from "./app/actions/userActions";

function App() {
  const dispatch = useDispatch();
  const [isGetData, setIsGetData] = useState(false);
  const [showCard, setShowCard] = useState(false);

  const handleGetData = () => {
    dispatch(getData());
    setIsGetData(true);
  };

  const handleCard = () => {
    if (isGetData === true) {
      setShowCard(true);
    }
  };

  return (
    <div className="App">
      <Container fluid className="p-5">
        <Row>
          <Col className="d-flex justify-content-center">
            <Button onClick={handleGetData}>Get Data</Button>
          </Col>
        </Row>{" "}
        {isGetData && (
          <Row className="mt-2">
            <h2>Success Get Data</h2>
          </Row>
        )}{" "}
        <Row className="mt-2">
          <Col className="d-flex justify-content-center">
            <Button onClick={handleCard}>Show Data</Button>
          </Col>
        </Row>
        <Row className="mt-2">{showCard === true ? <CardList /> : ""}</Row>
      </Container>
    </div>
  );
}

export default App;
