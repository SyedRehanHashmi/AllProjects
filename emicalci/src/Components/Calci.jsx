import React, { useEffect, useState } from "react";
import { Form, Card, Row, Col, Button } from "react-bootstrap";
import "./Calci.css";

export const Calci = () => {
  const [pri, setPri] = useState("");
  const [num, setNum] = useState("");
  const [int, setInt] = useState("");
  const [emi, setEmi] = useState(0);
  const handleEmi = () => {
    const si = (pri * num * int) / 100;
    const repayAmount = Number(pri) + Number(si);
    const localEmi = repayAmount / (num * 12);
    setEmi(localEmi);
  };
  useEffect(() => {
    handleEmi();
  }, [pri, num, int]);
  return (
    <div>
      <Form>
        <Card className="calculate">
          <h2>EMI Calculate</h2>
          <Row className="out">
            <Col xs="2"></Col>
            <Col xs="4">
              <Form.Label column sm="4">
                Principle:
              </Form.Label>
            </Col>
            <Col xs="4">
              <Form.Control
                type="number"
                placeholder="Principle"
                onChange={(e) => setPri(e.target.value)}
              />
            </Col>
            <Col xs="2"></Col>
          </Row>

          {/*-------------------------------- */}
          <Row className="out">
            <Col xs="2"></Col>
            <Col xs="4">
              <Form.Label column sm="4">
                Number:
              </Form.Label>
            </Col>
            <Col xs="4">
              <Form.Control
                type="number"
                placeholder="Number"
                onChange={(e) => setNum(e.target.value)}
              />
            </Col>
            <Col xs="2"></Col>
          </Row>

          {/*--------------------------------------- */}
          <Row className="out">
            <Col xs="2"></Col>
            <Col xs="4">
              <Form.Label column sm="4">
                Interest:
              </Form.Label>
            </Col>
            <Col xs="4">
              <Form.Control
                type="number"
                placeholder="Rate of Interest"
                onChange={(e) => setInt(e.target.value)}
              />
            </Col>
            <Col xs="2"></Col>
          </Row>
          <Col xs="2"></Col>
          <Row>
            <Col xs="6"></Col>
            <hr />
            {/* -------------------------------- */}
            <Row className="out">
              <Col xs="1"></Col>
              <Col xs="8">
                <h3>
                  <b>Total EMI:</b> &nbsp;
                  <b>{emi}</b>
                </h3>
              </Col>
              <Col xs="1"></Col>
              <Col xs="2"></Col>
            </Row>
            {/* ------------------------------------- */}
            <Row>
              <Col xs="4"></Col>
              <Col xs="4">
                <Button className="submit" onClick={handleEmi}>
                  <b>Submit</b>
                </Button>
              </Col>
              <Col xs="4"></Col>
            </Row>
            <Col xs="4"></Col>
          </Row>
        </Card>
      </Form>
    </div>
  );
};
