import React, { useState, useEffect } from "react";
import "./PersonDetails.css";
import { Row, Col } from "react-bootstrap";
import logoImg from "../../assets/images/healthrx-logo.png";
import hexagonImg from "../../assets/images/hexagon.png";
import API from '../../utils/API';
import { getUrlParameter } from '../../utils/helpers';



export default function PersonDetails(props) {
  const [personDetails, setPersonDetails] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    let phoneNum = getUrlParameter('phone');
    if (phoneNum) {
      API.get('/getUser?phone='+phoneNum)
        .then(res => {
          setPersonDetails(res.data);
          setLoad(true);
        })
        .catch(err => {
          setError({message: err.response.statusText});
          setLoad(true);
        })
    } else {
      setError({ message: 'No phone number specified' });
      setLoad(true)
    }

  }, []);

  if (load) {
    return (
      <div>
        {error ? <p>{error.message}</p> : renderContent()}
      </div>
    );
  } else {
    return (
      <div>
        Loading...
      </div>
    );
  }

  function renderContent() {
    const formatedDate = () => {
      let today = new Date();
      return today.getDate() + '-' + (today.getMonth()+1) + '-' + today.getFullYear()
    }

    const determineType = (val, min, max) => {
      val = parseFloat(val);
      min = parseFloat(min);
      max = parseFloat(max);

      return (val>=min && val <= max ) ? 'normal': (val<min)? 'under' : 'above';
    }
    const generateTypeElem = (val, min, max, isRight) => {
      let type = determineType(val, min, max);
      let rightClass = isRight ? 'right' :'';
      return (
        <span className={`item-top ${rightClass} ${type}`}>{type}</span>
      )
    }

    const getTypeClass = (val, min, max) => (determineType(val, min, max))

    const fitnessTypeVal = (val) => {
      const min = 85;
      const max = 115;
      return getTypeClass(val, min, max)
    }
    
    return (
      personDetails.map((person, index) => (
        <div className="details-container" key={index}>
          <Row className="head-container">
            <Col md={12}>
              <header>
                <nav className="navbar navbar-light bg-light">
                  <a className="navbar-brand" href="#">
                    <img className="float-right navbar-logo" src={logoImg} alt="healthrx-logo" />
                  </a>
                </nav>
                <div className="head-info">
                  <div>Name: {person["1"]}</div>
                  <div>ID: {person["2"]}</div>
                </div>
                <div className="head-info">
                  <div>Height: {person["3"]}</div>
                  <div>Date: {formatedDate()}</div>
                </div>
              </header>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <div className="main-contents">
                <div className="info-box">
                  <div className="info-head">
                    <h6>{person["65"]}</h6>
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
                    <div className="text">{person["18"]}</div>
                  </div>
                  <div className="item-text">
                    <h6>Total Body Water</h6>
                    { generateTypeElem(person["18"], person["19"], person["20"], true) }
                    <p>Total Amount of water in body.</p>
                    <p>Normal Range : {person["19"]} - {person["20"]}</p>
                  </div>
                </div>

                <div className="item-box">
                  <div className="item-text text-right">
                    <h6>Proteins</h6>
                    {/* <span className="item-top above">Above</span> */}
                    { generateTypeElem(person["21"], person["22"], person["23"], false) }
                    <p>For Building Blocks.</p>
                    <p>Normal Range : {person["22"]} - {person["23"]} Kg</p>
                  </div>
                  <div className="item-hexagon right-hex">
                    <img src={hexagonImg} alt="hexgaon img" className="img" />
                    <div className="text">{person["21"]}</div>
                  </div>
                </div>

                <div className="item-box">
                  <div className="item-hexagon">
                    <img src={hexagonImg} alt="hexgaon img" className="img" />
                    <div className="text">{person["24"]}</div>
                  </div>
                  <div className="item-text">
                    <h6>Minerals</h6>
                    {/* <span className="item-top right under">Under</span> */}
                    { generateTypeElem(person["24"], person["25"], person["26"], true) }
                    <p>For Strengthening bones</p>
                    <p>Normal Range : {person["25"]} - {person["26"]}</p>
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
                    {/* <span className="item-top normal">Normal</span> */}
                    { generateTypeElem(person["27"], person["28"], person["29"], false) }
                    <p>bla bla bla bla bla bla bla</p>
                    <p>Normal Range : {person["28"]} - {person["29"]}</p>
                  </div>
                  <div className="item-hexagon right-hex">
                    <img src={hexagonImg} alt="hexgaon img" className="img" />
                    <div className="text">{person["27"]}</div>
                  </div>
                </div>

                <div className="item-box">
                  <div className="item-hexagon">
                    <img src={hexagonImg} alt="hexgaon img" className="img" />
                    <div className="text">{person["15"]}</div>
                  </div>
                  <div className="item-text">
                    <h6>Weight</h6>
                    {/* <span className="item-top right normal">Normal</span> */}
                    { generateTypeElem(person["15"], person["16"], person["17"], true) }
                    <p>Sum of all above.</p>
                    <p>Normal Range : {person["16"]} - {person["17"]}</p>
                  </div>
                </div>

                <div className="item-box">
                  <div className="item-text text-right">
                    <h6>Skeleton Muscle Mass</h6>
                    {/* <span className="item-top under">Under</span> */}
                    { generateTypeElem(person["36"], person["37"], person["38"], false) }
                    <p>bla bla bla bla bla bla bla</p>
                    <p>Normal Range :{person["37"]} - {person["38"]}</p>
                  </div>
                  <div className="item-hexagon right-hex">
                    <img src={hexagonImg} alt="hexgaon img" className="img" />
                    <div className="text">{person["36"]}</div>
                  </div>
                </div>

                <div className="item-box">
                  <div className="item-hexagon">
                    <img src={hexagonImg} alt="hexgaon img" className="img" />
                    <div className="text">{person["33"]}</div>
                  </div>
                  <div className="item-text">
                    <h6>Fat Free</h6>
                    {/* <span className="item-top right under">Under</span> */}
                    { generateTypeElem(person["33"], person["34"], person["35"], true) }
                    <p>bla bla bla bla</p>
                    <p>Normal Range : {person["34"] } - {person["35"]}</p>
                  </div>
                </div>

                <div className="item-box">
                  <div className="item-text text-right">
                    <h6>Soft Lean Mass</h6>
                    {/* <span className="item-top under">Under</span> */}
                    { generateTypeElem(person["30"], person["31"], person["32"], false) }
                    <p>bla bla bla bla bla bla bla</p>
                    <p>Normal Range : {person["31"]} - {person["32"]}</p>
                  </div>
                  <div className="item-hexagon right-hex">
                    <img src={hexagonImg} alt="hexgaon img" className="img" />
                    <div className="text">{person["30"]}</div>
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
                    <div className={`arrow-right ${getTypeClass(person["39"], person["40"], person["41"])} `}></div>
                    <h6>{person["39"]}</h6>
                  </div>
                  <div className="info-text">
                    <h6>Body Mass Index</h6>
                    <p>bla bla bla bla bla bla bla</p>
                    <p>Normal Range : {person["40"]} - {person["41"]}</p>
                  </div>
                </div>

                <div className="info-box info-parameters">
                  <div className="info-head">
                    <div className={`arrow-right ${getTypeClass(person["42"], person["43"], person["44"])}`}></div>
                    <h6>{person["42"]}</h6>
                  </div>
                  <div className="info-text">
                    <h6>Percentage Body Fat</h6>
                    <p>bla bla bla bla bla bla bla</p>
                    <p>Normal Range : {person["43"]} - {person["44"]}</p>
                  </div>
                </div>

                <div className="info-box">
                  <div className="info-text">
                    <h6>Research Parameters</h6>
                  </div>
                </div>

                <div className="info-box info-parameters">
                  <div className="info-head">
                    <div className="arrow-right above"></div>
                    <h6>12</h6>
                  </div>
                  <div className="info-text">
                    <h6>Visceral Fat Level</h6>
                    <p>bla bla bla bla bla bla bla</p>
                    <p>Normal Range : 1-9</p>
                  </div>
                </div>

                <div className="info-box info-parameters">
                  <div className="info-head">
                    <div className="arrow-right normal"></div>
                    <h6>2.2</h6>
                  </div>
                  <div className="info-text">
                    <h6>Weight Control</h6>
                    <p>bla bla bla bla bla bla bla</p>
                    <p>Normal Range : -5.1-7.3</p>
                  </div>
                </div>

                <div className="info-box info-parameters">
                  <div className="info-head">
                    <div className={`arrow-right ${getTypeClass(person["71"], person["72"], person["73"])}`}></div>
                    <h6>{person["71"]}</h6>
                  </div>
                  <div className="info-text">
                    <h6>Waist-Hip Ratio</h6>
                    <p>bla bla bla bla bla bla bla</p>
                    <p>Normal Range : {person["72"]} - {person["73"]}</p>
                  </div>
                </div>

                <div className="info-box info-parameters">
                  <div className="info-head">
                    <div className={`arrow-right ${getTypeClass(person["75"], person["76"], person["77"])}`}></div>
                    <h6>{person["75"]}</h6>
                  </div>
                  <div className="info-text">
                    <h6>Obesity Degree</h6>
                    <p>bla bla bla bla bla bla bla</p>
                    <p>Normal Range : {person["76"]} - {person["77"]}</p>
                  </div>
                </div>

                <div className="info-box info-parameters">
                  <div className="info-head">
                    <div className={`arrow-right ${getTypeClass(person["78"], person["79"], person["80"])}`}></div>
                    <h6>{person["78"]}</h6>
                  </div>
                  <div className="info-text">
                    <h6>Bone Mineral Content</h6>
                    <p>bla bla bla bla bla bla bla</p>
                    <p>Normal Range : {person["79"]} - {person["80"]}</p>
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
                        <li>{person["49"]}</li>
                        <li>{person["50"]}%</li>
                        <li className={`highlight ${fitnessTypeVal(person["50"])}`}>{fitnessTypeVal(person["50"])}</li>
                      </ul>
                    </div>

                    <div className="stat-block" id="fit-block-2">
                      <ul className="stat-list">
                        <li>{person["45"]}</li>
                        <li>{person["46"]}%</li>
                        <li className={`highlight ${fitnessTypeVal(person["46"])}`}>{fitnessTypeVal(person["46"])}</li>
                      </ul>
                    </div>

                    <div className="stat-block" id="fit-block-3">
                      <ul className="stat-list">
                        <li>{person["51"]}</li>
                        <li>{person["52"]}%</li>
                        <li className={`highlight ${fitnessTypeVal(person["52"])}`}>{fitnessTypeVal(person["52"])}</li>
                      </ul>
                    </div>

                    <div className="stat-block" id="fit-block-4">
                      <ul className="stat-list">
                      <li>{person["47"]}</li>
                      <li>{person["48"]}%</li>
                      <li className={`highlight ${fitnessTypeVal(person["48"])}`}>{fitnessTypeVal(person["48"])}</li>
                      </ul>
                    </div>

                    <div className="stat-block" id="fit-block-5">
                      <ul className="stat-list">
                        <li>{person["53"]}</li>
                        <li>{person["54"]}%</li>
                        <li className={`highlight ${fitnessTypeVal(person["54"])}`}>{fitnessTypeVal(person["54"])}</li>
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
                        <li>{person["59"]}</li>
                        <li>{person["60"]}%</li>
                        <li className={`highlight ${fitnessTypeVal(person["60"])}`}>{fitnessTypeVal(person["60"])}</li>
                      </ul>
                    </div>

                    <div className="stat-block" id="fat-block-2">
                      <ul className="stat-list">
                        <li>{person["55"]}</li>
                        <li>{person["56"]}%</li>
                        <li className={`highlight ${fitnessTypeVal(person["56"])}`}>{fitnessTypeVal(person["56"])}</li>
                      </ul>
                    </div>

                    <div className="stat-block" id="fat-block-3">
                      <ul className="stat-list">
                        <li>{person["61"]}</li>
                        <li>{person["62"]}%</li>
                        <li className={`highlight ${fitnessTypeVal(person["62"])}`}>{fitnessTypeVal(person["62"])}</li>
                      </ul>
                    </div>

                    <div className="stat-block" id="fat-block-4">
                      <ul className="stat-list">
                        <li>{person["57"]}</li>
                        <li>{person["58"]}%</li>
                        <li className={`highlight ${fitnessTypeVal(person["58"])}`}>{fitnessTypeVal(person["58"])}</li>
                      </ul>
                    </div>

                    <div className="stat-block" id="fat-block-5">
                      <ul className="stat-list">
                        <li>{person["63"]}</li>
                        <li>{person["64"]}%</li>
                        <li className={`highlight ${fitnessTypeVal(person["64"])}`}>{fitnessTypeVal(person["64"])}</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div id="target-weight" className="circle-container">
                  <div className="circle">
                    <div className="circle-content">
                      <h4 className="circle-title">target weight</h4>
                      <h6 className="circle-stat">{person["66"]}</h6>
                      <h6 class="circle-measurement">Kg</h6>
                    </div>
                  </div>
                </div>

                <div id="target-weight" className="circle-container">
                  <div className="circle">
                    <div className="circle-content">
                      <h4 className="circle-title">Basal Metabolic Rate</h4>
                      <h6 className="circle-stat">{person["70"]}</h6>
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
      )
      )
    );
  }
}