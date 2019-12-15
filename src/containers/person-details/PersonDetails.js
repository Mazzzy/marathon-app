import React from "react";
import "./PersonDetails.css";
import { Row, Col } from "react-bootstrap";
import logoImg from "../../assets/images/healthrx-logo.png";
import hexagonImg from "../../assets/images/hexagon.png";

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
              <div>Name: </div>
              <div>ID: </div>
              <div>Height: </div>
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
                <img src={hexagonImg} alt="hexgaon img" className="img" />
                <div className="text">31.3</div>
              </div>
              <div className="item-text">
                <div className="heading">Total Body Water
                  </div>
                <div className="item-top under">Under
                  </div>
                <div className="content">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </div>
              </div>

            </div>

            <div className="info-box">
              <div className="info-text">
                <h6>Obesity Analysis</h6>
                <p>BMI is an index used to determine obesity by using height and weight. PBF is the persentage of the body fat compared to body weight.</p>
              </div>
            </div>

            <div className="info-box info-parameters">
              <div className="info-head">
                <div class="arrow-right normal"></div>
                <h6>21.2</h6>
              </div>
              <div className="info-text">
                <h6>Body Mass Index</h6>
                <p>bla bla bla bla bla bla bla Normal Range : 18.5-25.0</p>
              </div>
            </div>

            <div className="fitness-container">

              <div className="image-container" id="fit-image">
                <div className="stat-block" id="fit-block-1">
                  <p className="stat-figure">
                    2.18<br />
                    81.1%<br />
                  </p>
                  <span className="highlight">normal</span>
                </div>



                <div className="stat-block" id="fit-block-2">
                  <p className="stat-figure">
                    2.18<br />
                    81.1%<br />
                  </p>
                  <span className="highlight">above</span>
                </div>



                <div className="stat-block" id="fit-block-3">
                  <p className="stat-figure">
                    2.18<br />
                    81.1%<br />
                  </p>
                  <span className="highlight">under</span>
                </div>



                <div className="stat-block" id="fit-block-4">
                  <p className="stat-figure">
                    2.18<br />
                    81.1%<br />
                  </p>
                  <span className="highlight">under</span>
                </div>



                <div className="stat-block" id="fit-block-5">
                  <p className="stat-figure">
                    2.18<br />
                    81.1%<br />
                  </p>
                  <span className="highlight">under</span>
                </div>


              </div>
            </div>
            <div className="fitness-container">
              <div className="image-container" id="fat-image">


                <div className="stat-block" id="fat-block-1">
                  <p className="stat-figure">
                    2.18<br />
                    81.1%<br />
                  </p>
                  <span className="highlight">normal</span>
                </div>



                <div className="stat-block" id="fat-block-2">
                  <p className="stat-figure">
                    2.18<br />
                    81.1%<br />
                  </p>
                  <span className="highlight">above</span>
                </div>


                <div className="stat-block" id="fat-block-3">
                  <p className="stat-figure">
                    2.18<br />
                    81.1%<br />
                  </p>
                  <span className="highlight">under</span>
                </div>



                <div className="stat-block" id="fat-block-4">
                  <p className="stat-figure">
                    2.18<br />
                    81.1%<br />
                  </p>
                  <span className="highlight">under</span>
                </div>



                <div className="stat-block" id="fat-block-5">
                  <p className="stat-figure">
                    2.18<br />
                    81.1%<br />
                  </p>
                  <span className="highlight">under</span>
                </div>


              </div>
            </div>
            <div id="target-weight" class="fitness-container">
        <div class="circle">
            <div class="circle-content">
                <span class="circle-title">target weight</span>
                <h2 class="circle-stat"> 58.8 <small class="measurement">Kg</small></h2>
            </div>
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