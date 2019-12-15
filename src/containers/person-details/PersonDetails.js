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
              <div className="item-hexagon">
                <img src={hexagonImg} alt="hexgaon img" className="img" />
                <div className="text">31.3</div>
              </div>
              <div className="item-text">
                <h6>Total Body Water</h6>
                <span className="item-top right under">Under</span>
                <p>Total Amount of water in body. Normal Range : 33.0 - 40.4 L.</p>
              </div>
            </div>

            <div className="item-box">
              <div className="item-text text-right">
                <h6>Proteins</h6>
                <span className="item-top above">Above</span>
                <p>For Building Blocks. Normal Range : 8.8 - 10.8 Kg.</p>
              </div>
              <div className="item-hexagon right-hex">
                <img src={hexagonImg} alt="hexgaon img" className="img" />
                <div className="text">31.3</div>
              </div>
            </div>

            <div className="item-box">
              <div className="item-hexagon">
                <img src={hexagonImg} alt="hexgaon img" className="img" />
                <div className="text">2.9</div>
              </div>
              <div className="item-text">
                <h6>Minerals</h6>
                <span className="item-top right under">Under</span>
                <p>For Strengthening bones Normal Range : 3.0.6-3.74.</p>
              </div>
            </div>

            <div className="info-box">
              <div className="info-text">
                <h6>Muscle-Fat Analysis</h6>
                <p>Compare the bar lengths of skeletal muscle mass and body fat mass. The longer skeletal muscle ,mass bar is compared to the body fat mass bar, the stronger the body is.</p>
              </div>
            </div>

            <div className="item-box">
              <div className="item-text text-right">
                <h6>Body Fat Mass</h6>
                <span className="item-top normal">Normal</span>
                <p>bla bla bla bla bla bla bla Normal Range : 7.4 - 14.1.</p>
              </div>
              <div className="item-hexagon right-hex">
                <img src={hexagonImg} alt="hexgaon img" className="img" />
                <div className="text">13.9</div>
              </div>
            </div>

            <div className="item-box">
              <div className="item-hexagon">
                <img src={hexagonImg} alt="hexgaon img" className="img" />
                <div className="text">2.9</div>
              </div>
              <div className="item-text">
                <h6>Weight</h6>
                <span className="item-top right normal">Normal</span>
                <p>Sum of all above. Normal Range : 3.0.6-3.74</p>
              </div>
            </div>

            <div className="item-box">
              <div className="item-text text-right">
                <h6>Skeleton Muscle Mass</h6>
                <span className="item-top under">Under</span>
                <p>bla bla bla bla bla bla bla Normal Range :24.9-30.5.</p>
              </div>
              <div className="item-hexagon right-hex">
                <img src={hexagonImg} alt="hexgaon img" className="img" />
                <div className="text">23.4</div>
              </div>
            </div>

            <div className="item-box">
              <div className="item-hexagon">
                <img src={hexagonImg} alt="hexgaon img" className="img" />
                <div className="text">42.7</div>
              </div>
              <div className="item-text">
                <h6>Fat Free</h6>
                <span className="item-top right under">Under</span>
                <p>bla bla bla bla Normal Range : 45.0-55.0.</p>
              </div>
            </div>

            <div className="item-box">
              <div className="item-text text-right">
                <h6>Soft Lean Mass</h6>
                <span className="item-top under">Under</span>
                <p>bla bla bla bla bla bla bla Normal Range :42.5-51.9.</p>
              </div>
              <div className="item-hexagon right-hex">
                <img src={hexagonImg} alt="hexgaon img" className="img" />
                <div className="text">40.3</div>
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

            <div className="info-box info-parameters">
              <div className="info-head">
                <div class="arrow-right above"></div>
                <h6>24.5</h6>
              </div>
              <div className="info-text">
                <h6>Persentage Body Fat</h6>
                <p>bla bla bla bla bla bla bla Normal Range : 10-20</p>
              </div>
            </div>

            <div className="info-box">
              <div className="info-text">
                <h6>Research Parameters</h6>
              </div>
            </div>

            <div className="info-box info-parameters">
              <div className="info-head">
                <div class="arrow-right above"></div>
                <h6>12</h6>
              </div>
              <div className="info-text">
                <h6>Visceral Fat Level</h6>
                <p>bla bla bla bla bla bla bla Normal Range : 1-9</p>
              </div>
            </div>

            <div className="info-box info-parameters">
              <div className="info-head">
                <div class="arrow-right normal"></div>
                <h6>2.2</h6>
              </div>
              <div className="info-text">
                <h6>Weight Control</h6>
                <p>bla bla bla bla bla bla bla Normal Range : -5.1-7.3</p>
              </div>
            </div>

            <div className="info-box info-parameters">
              <div className="info-head">
                <div class="arrow-right normal"></div>
                <h6>0.87</h6>
              </div>
              <div className="info-text">
                <h6>Waist-Hip Ratio</h6>
                <p>bla bla bla bla bla bla bla Normal Range : 0.8-0.9</p>
              </div>
            </div>

            <div className="info-box info-parameters">
              <div className="info-head">
                <div class="arrow-right normal"></div>
                <h6>96</h6>
              </div>
              <div className="info-text">
                <h6>Obesity Degree</h6>
                <p>bla bla bla bla bla bla bla Normal Range : 90-110</p>
              </div>
            </div>

            <div className="info-box info-parameters">
              <div className="info-head">
                <div class="arrow-right under"></div>
                <h6>0.87</h6>
              </div>
              <div className="info-text">
                <h6>Bone Mineral Content</h6>
                <p>bla bla bla bla bla bla bla Normal Range :2.52-3.08</p>
              </div>
            </div>

            <div className="info-box fitness-info-box">
              <div className="info-text">
                <h6>Free Fat Mass</h6>
                <p>Fat-free mass, also known as lean body mass,refers to all of your body components except fat. It includes your body's water, bone, organs and muscle content. </p>
              </div>
            </div>

            <div className="fitness-container">
              <div className="image-container fit-image">
                <div className="stat-block" id="fit-block-1">
                  <ul className="stat-list">
                    <li>2.18</li>
                    <li>81.1%</li>
                    <li className="highlight normal">normal</li>
                  </ul>
                </div>

                <div className="stat-block" id="fit-block-2">
                  <ul className="stat-list">
                    <li>2.18</li>
                    <li>81.1%</li>
                    <li className="highlight above">above</li>
                  </ul>
                </div>

                <div className="stat-block" id="fit-block-3">
                  <ul className="stat-list">
                    <li>2.18</li>
                    <li>81.1%</li>
                    <li className="highlight under">under</li>
                  </ul>
                </div>

                <div className="stat-block" id="fit-block-4">
                  <ul className="stat-list">
                    <li>2.18</li>
                    <li>81.1%</li>
                    <li className="highlight under">under</li>
                  </ul>
                </div>

                <div className="stat-block" id="fit-block-5">
                  <ul className="stat-list">
                    <li>2.18</li>
                    <li>81.1%</li>
                    <li className="highlight under">under</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="info-box fitness-info-box">
              <div className="info-text">
                <h6>Body Fat Mass</h6>
                <p>The body fat percentage (BFP) of a human or other living being is the total mass of fat divided by total body mass, multiplied by 100; body fat includes essential body fat and storage body fat.</p>
              </div>
            </div>

            <div className="fitness-container">
              <div className="image-container fat-image">
                <div className="stat-block" id="fat-block-1">
                  <ul className="stat-list">
                    <li>2.18</li>
                    <li>81.1%</li>
                    <li className="highlight normal">normal</li>
                  </ul>
                </div>

                <div className="stat-block" id="fat-block-2">
                  <ul className="stat-list">
                    <li>2.18</li>
                    <li>81.1%</li>
                    <li className="highlight above">above</li>
                  </ul>
                </div>
                
                <div className="stat-block" id="fat-block-3">
                  <ul className="stat-list">
                    <li>2.18</li>
                    <li>81.1%</li>
                    <li className="highlight under">under</li>
                  </ul>
                </div>
                
                <div className="stat-block" id="fat-block-4">
                  <ul className="stat-list">
                    <li>2.18</li>
                    <li>81.1%</li>
                    <li className="highlight under">under</li>
                  </ul>
                </div>
                
                <div className="stat-block" id="fat-block-5">
                  <ul className="stat-list">
                    <li>2.18</li>
                    <li>81.1%</li>
                    <li className="highlight under">under</li>
                  </ul>
                </div>
              </div>
            </div>

            <div id="target-weight" class="circle-container">
              <div class="circle">
                  <div class="circle-content">
                    <h4 class="circle-title">target weight</h4>
                    <h6 class="circle-stat">58.8</h6>
                  </div>
              </div>
            </div>

            <div id="target-weight" class="circle-container">
              <div class="circle">
                  <div class="circle-content">
                    <h4 class="circle-title">Basal Metabolic Rate</h4>
                    <h6 class="circle-stat">1293</h6>
                  </div>
              </div>
            </div>

          </div>
        </Col>
      </Row>

      <Row>
        <Col md={12}>
          <footer></footer>
        </Col>
      </Row>
    </div>
  );
}