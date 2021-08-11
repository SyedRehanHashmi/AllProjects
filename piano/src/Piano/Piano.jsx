import React from "react";
import { Button, Card, Row, Col } from "react-bootstrap";
import { Childpaino } from "./Pianochild/Childpiano";

export const Paino = () => {
  return (
    <div className="sound">
      <Card className="music_card">
        <Row>
          <Col md="4">
            <h2>Low</h2>
            <Childpaino />
          </Col>
          <Col md="4">
            <h2>Medium</h2>
            <Childpaino />
          </Col>
          <Col md="4">
            <h2>High</h2>
            <Childpaino />
          </Col>
        </Row>
      </Card>
    </div>
  );
};
