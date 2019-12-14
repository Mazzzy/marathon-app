import React from "react";
import "./PersonDetails.css";
import { Row, Col } from "react-bootstrap";
import logoImg from "../../assets/images/healthrx-logo.png";

export default function PersonDetails(props) {
  return (
    <div>
      <Row className="head-container">
        <Col md={12}>
            <header>
              <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">
                  <img className="float-right navbar-logo" src={logoImg} alt="healthrx-logo" />
                </a>
              </nav>
              <div className="head-info">
                <Col xs={6}>
                  <span>Name: </span>
                </Col>
                <Col xs={6}>
                  <span>ID: </span>
                </Col>
              </div>
            </header>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <div className="main-contents">
            <div className="info-box">
              <div className="info-head">
                <h6>68</h6>
              </div>
              <div className="info-text">
                <h6>InBody Score</h6>
                <p>Total Score that reflects the evaluation of body compilation. A mascular person may score above 100.</p>
              </div>
            </div>
            <div className="info-box">
              <div className="info-text">
                <h6>Body Composition Analysis</h6>
                <p>Body weight is the sum of total body water, protein, minerals, and body fat mass. Maintain a balanced body composition  to stay healthy.</p>
              </div>
            </div>

            <div className="item-box">
              <div className="item-left">
                <h6>68</h6>
              </div>
              <div className="item-text">
                <h6>InBody Score</h6>
                <p>Total Score that reflects the evaluation of body compilation. A mascular person may score above 100.</p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
            <footer>Footer</footer>
        </Col>
      </Row>
    </div>
  );
}