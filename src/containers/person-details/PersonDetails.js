import React, { useState, useEffect } from "react";
import "./PersonDetails.css";
import { Row, Col } from "react-bootstrap";
import logoImg from "../../assets/images/healthrx-logo.png";
import rhcImg from "../../assets/images/rhc-logo.jpg";
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
                  <a className="navbar-brand left-logo" href="#">
                    <img className="navbar-logo" src={rhcImg} alt="rhc-logo" />
                  </a>
                  <a className="navbar-brand pull-right" href="#">
                    <img className="navbar-logo" src={logoImg} alt="healthrx-logo" />
                  </a>
                </nav>
                <div className="head-info">
                  <div>ID: {person["ID"]}</div>
                </div>
                <div className="head-info">
                  <div>Height: {person["Height"]} cm</div>
                  {/* <div>Date: {formatedDate()}</div> */}
                  <div>Date: {(person["Test Date / Time"]).split(" ")[0]}</div>
                </div>
              </header>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <div className="main-contents">
                <div className="info-box">
                  <div className="info-head">
                    <h6>{person["InBody Score"]}</h6>
                  </div>
                  <div className="info-text">
                    <h6>InBody Score</h6>
                    <p>The InBody Score is a reflection of the overall evaluation of your body composition. The more muscle mass the body has the higher the score will be and can possibly score over 100 points.</p>
                  </div>
                </div>

                <div className="info-box">
                  <div className="info-text">
                    <h6>Body Composition Analysis</h6>
                    <p>A method of describing what the body is made of, including fat, protein, minerals and body water. Maintain a balanced body composition to stay healthy. Below are the values for your BCA and reference range.</p>
                  </div>
                </div>
                <div className="item-box">
                  <div className="item-hexagon left-hex">
                    <img src={hexagonImg} alt="hexgaon img" className="img" />
                    <div className="text">{person["TBW (Total Body Water)"]}</div>
                  </div>
                  <div className="item-text">
                    <h6>Total Body Water</h6>
                    { generateTypeElem(person["TBW (Total Body Water)"], person["Lower Limit (TBW Normal Range)"], person["Upper Limit (TBW Normal Range)"], true) }
                    <p>Your body fat, muscles, blood, and other bodily fluids all contain water.</p>
                    <p>Normal Range : {person["Lower Limit (TBW Normal Range)"]} - {person["Upper Limit (TBW Normal Range)"]} Kgs</p>
                  </div>
                </div>

                <div className="item-box">
                  <div className="item-text text-right">
                    <h6>Proteins</h6>
                    { generateTypeElem(person["Protein"], person["Lower Limit (Protein Normal Range)"], person["Upper Limit (Protein Normal Range)"], false) }
                    <p>Proteins are the building blocks of your muscles.</p>
                    <p>Normal Range : {person["Lower Limit (Protein Normal Range)"]} - {person["Upper Limit (Protein Normal Range)"]} Kgs</p>
                  </div>
                  <div className="item-hexagon right-hex">
                    <img src={hexagonImg} alt="hexgaon img" className="img" />
                    <div className="text">{person["Protein"]}</div>
                  </div>
                </div>

                <div className="item-box">
                  <div className="item-hexagon left-hex">
                    <img src={hexagonImg} alt="hexgaon img" className="img" />
                    <div className="text">{person["Minerals"]}</div>
                  </div>
                  <div className="item-text">
                    <h6>Minerals</h6>
                    { generateTypeElem(person["Minerals"], person["Lower Limit (Minerals Normal Range)"], person["Upper Limit (Minerals Normal Range)"], true) }
                    <p>Your body contains minerals, primarily in bloodstream and bone tissue.</p>
                    <p>Normal Range : {person["Lower Limit (Minerals Normal Range)"]} - {person["Upper Limit (Minerals Normal Range)"]} Kgs</p>
                  </div>
                </div>

                <div className="info-box">
                  <div className="info-text">
                    <h6>Muscle-Fat Analysis</h6>
                    <p>The Muscle-Fat Analysis tells you whether your client has a healthy balance of Skeleton Muscle Mass and Body Fat Mass in respect to his or her weight.</p>
                  </div>
                </div>

                <div className="item-box">
                  <div className="item-text text-right">
                    <h6>Body Fat Mass</h6>
                    { generateTypeElem(person["BFM (Body Fat Mass)"], person["Lower Limit (BFM Normal Range)"], person["Upper Limit (BFM Normal Range)"], false) }
                    <p>This is combination of both surface level and internal fat stored in your body.</p>
                    <p>Normal Range : {person["Lower Limit (BFM Normal Range)"]} - {person["Upper Limit (BFM Normal Range)"]} Kgs</p>
                  </div>
                  <div className="item-hexagon right-hex">
                    <img src={hexagonImg} alt="hexgaon img" className="img" />
                    <div className="text">{person["BFM (Body Fat Mass)"]}</div>
                  </div>
                </div>

                <div className="item-box">
                  <div className="item-hexagon left-hex">
                    <img src={hexagonImg} alt="hexgaon img" className="img" />
                    <div className="text">{person["Weight"]}</div>
                  </div>
                  <div className="item-text">
                    <h6>Weight</h6>
                    { generateTypeElem(person["Weight"], person["Lower Limit (Weight Normal Range)"], person["Upper Limit (Weight Normal Range)"], true) }
                    <p>Total Body Weight.</p>
                    <p>Normal Range : {person["Lower Limit (Weight Normal Range)"]} - {person["Upper Limit (Weight Normal Range)"]} Kgs</p>
                  </div>
                </div>

                <div className="item-box">
                  <div className="item-text text-right">
                    <h6>Skeleton Muscle Mass</h6>
                    { generateTypeElem(person["SMM (Skeletal Muscle Mass)"], person["Lower Limit (SMM Normal Range)"], person["Upper Limit (SMM Normal Range)"], false) }
                    <p>This is weight of Skeletal muscle which can be developed through exercise. </p>
                    <p>Normal Range :{person["Lower Limit (SMM Normal Range)"]} - {person["Upper Limit (SMM Normal Range)"]} Kgs</p>
                  </div>
                  <div className="item-hexagon right-hex">
                    <img src={hexagonImg} alt="hexgaon img" className="img" />
                    <div className="text">{person["SMM (Skeletal Muscle Mass)"]}</div>
                  </div>
                </div>

                <div className="item-box">
                  <div className="item-hexagon left-hex">
                    <img src={hexagonImg} alt="hexgaon img" className="img" />
                    <div className="text">{person["FFM (Fat Free Mass)"]}</div>
                  </div>
                  <div className="item-text">
                    <h6>Fat Free Mass</h6>
                    { generateTypeElem(person["FFM (Fat Free Mass)"], person["Lower Limit (FFM Normal Range)"], person["Upper Limit (FFM Normal Range)"], true) }
                    <p>This is weight of body excluding body fat mass.</p>
                    <p>Normal Range : {person["Lower Limit (FFM Normal Range)"] } - {person["Upper Limit (FFM Normal Range)"]} Kgs</p>
                  </div>
                </div>

                {/* <div className="item-box">
                  <div className="item-text text-right">
                    <h6>Soft Lean Mass</h6>
                    { generateTypeElem(person["SLM (Soft Lean Mass)"], person["Lower Limit (SLM Normal Range)"], person["Upper Limit (SLM Normal Range)"], false) }
                    <p>bla bla bla bla bla bla bla</p>
                    <p>Normal Range : {person["Lower Limit (SLM Normal Range)"]} - {person["Upper Limit (SLM Normal Range)"]}</p>
                  </div>
                  <div className="item-hexagon right-hex">
                    <img src={hexagonImg} alt="hexgaon img" className="img" />
                    <div className="text">{person["SLM (Soft Lean Mass)"]}</div>
                  </div>
                </div> */}

                <div className="info-box">
                  <div className="info-text">
                    <h6>Obesity Analysis</h6>
                    <p>BMI is a rule of thumb to categorize a person as underweight, normal weight, overweight, or obese based on weight and height. Percentage Body Fat is division of Body Fat Mass by Total Body weight. It is a much better indicator of the risk of obesity than BMI.</p>
                  </div>
                </div>

                <div className="info-box info-parameters">
                  <div className="info-head">
                    <div className={`arrow-right ${getTypeClass(person["BMI (Body Mass Index)"], person["Lower Limit (BMI Normal Range)"], person["Upper Limit (BMI Normal Range)"])} `}></div>
                    <h6>{person["BMI (Body Mass Index)"]}</h6>
                  </div>
                  <div className="info-text">
                    <h6>Body Mass Index</h6>
                    <p>Obesity index determined by height &amp; weight.</p>
                    <p>Normal Range : {person["Lower Limit (BMI Normal Range)"]} - {person["Upper Limit (BMI Normal Range)"]}</p>
                  </div>
                </div>

                <div className="info-box info-parameters">
                  <div className="info-head">
                    <div className={`arrow-right ${getTypeClass(person["PBF (Percent Body Fat)"], person["Lower Limit (PBF Normal Range)"], person["Upper Limit (PBF Normal Range)"])}`}></div>
                    <h6>{person["PBF (Percent Body Fat)"]}</h6>
                  </div>
                  <div className="info-text">
                    <h6>Percentage Body Fat</h6>
                    <p>PBF is the % of the body fat compared to body weight.</p>
                    <p>Normal Range : {person["Lower Limit (PBF Normal Range)"]} - {person["Upper Limit (PBF Normal Range)"]} %</p>
                  </div>
                </div>

                <div className="info-box">
                  <div className="info-text">
                    <h6>Research Parameters</h6>
                  </div>
                </div>

                {/* <div className="info-box info-parameters">
                  <div className="info-head">
                    <div className="arrow-right above"></div>
                    <h6>12</h6>
                  </div>
                  <div className="info-text">
                    <h6>Visceral Fat Level</h6>
                    <p>bla bla bla bla bla bla bla</p>
                    <p>Normal Range : 1-9</p>
                  </div>
                </div> */}

                {/* <div className="info-box info-parameters">
                  <div className="info-head">
                    <div className="arrow-right normal"></div>
                    <h6>2.2</h6>
                  </div>
                  <div className="info-text">
                    <h6>Weight Control</h6>
                    <p>bla bla bla bla bla bla bla</p>
                    <p>Normal Range : -5.1-7.3</p>
                  </div>
                </div> */}

                <div className="info-box info-parameters">
                  <div className="info-head">
                    <div className={`arrow-right ${getTypeClass(person["WHR (Waist-Hip Ratio)"], person["Lower Limit (WHR Normal Range)"], person["Upper Limit (WHR Normal Range)"])}`}></div>
                    <h6>{person["WHR (Waist-Hip Ratio)"]}</h6>
                  </div>
                  <div className="info-text">
                    <h6>Waist-Hip Ratio</h6>
                    <p>It is used to evaluate abdominal obesity.</p>
                    <p>Normal Range : {person["Lower Limit (WHR Normal Range)"]} - {person["Upper Limit (WHR Normal Range)"]}</p>
                  </div>
                </div>

                <div className="info-box info-parameters">
                  <div className="info-head">
                    <div className={`arrow-right ${getTypeClass(person["Obesity Degree"], person["Lower Limit (Obesity Degree Normal Range)"], person["Upper Limit (Obesity Degree Normal Range)"])}`}></div>
                    <h6>{person["Obesity Degree"]}</h6>
                  </div>
                  <div className="info-text">
                    <h6>Obesity Degree</h6>
                    <p>It is the percentage above or below ideal weight.</p>
                    <p>Normal Range : {person["Lower Limit (Obesity Degree Normal Range)"]} - {person["Upper Limit (Obesity Degree Normal Range)"]} %</p>
                  </div>
                </div>

                {/* <div className="info-box info-parameters">
                  <div className="info-head">
                    <div className={`arrow-right ${getTypeClass(person["78"], person["79"], person["80"])}`}></div>
                    <h6>{person["78"]}</h6>
                  </div>
                  <div className="info-text">
                    <h6>Bone Mineral Content</h6>
                    <p>bla bla bla bla bla bla bla</p>
                    <p>Normal Range : {person["79"]} - {person["80"]}</p>
                  </div>
                </div> */}

                <div className="info-box fitness-info-box">
                  <div className="info-text">
                    <h6>Fat Free Mass</h6>
                    <p>This is a sum of protiein, minerals and body water. In other words, this is weight of body excluding body fat mass. Below is a segmental representation of Fat Free mass.</p>
                  </div>
                </div>

                <div className="fitness-container">
                  <div className="image-container fit-image">
                    <div className="stat-block" id="fit-block-1">
                      <ul className="stat-list">
                        <li>{person["FFM of Trunk"]}</li>
                        <li>{person["FFM% of Trunk"]}%</li>
                        <li className={`highlight ${fitnessTypeVal(person["FFM% of Trunk"])}`}>{fitnessTypeVal(person["FFM% of Trunk"])}</li>
                      </ul>
                    </div>

                    <div className="stat-block" id="fit-block-2">
                      <ul className="stat-list">
                        <li>{person["FFM of Right Arm"]}</li>
                        <li>{person["FFM% of Right Arm"]}%</li>
                        <li className={`highlight ${fitnessTypeVal(person["FFM% of Right Arm"])}`}>{fitnessTypeVal(person["FFM% of Right Arm"])}</li>
                      </ul>
                    </div>

                    <div className="stat-block" id="fit-block-3">
                      <ul className="stat-list">
                        <li>{person["FFM of Right Leg"]}</li>
                        <li>{person["FFM% of Right Leg"]}%</li>
                        <li className={`highlight ${fitnessTypeVal(person["FFM% of Right Leg"])}`}>{fitnessTypeVal(person["FFM% of Right Leg"])}</li>
                      </ul>
                    </div>

                    <div className="stat-block" id="fit-block-4">
                      <ul className="stat-list">
                      <li>{person["FFM of Left Arm"]}</li>
                      <li>{person["FFM% of Left Arm"]}%</li>
                      <li className={`highlight ${fitnessTypeVal(person["FFM% of Left Arm"])}`}>{fitnessTypeVal(person["FFM% of Left Arm"])}</li>
                      </ul>
                    </div>

                    <div className="stat-block" id="fit-block-5">
                      <ul className="stat-list">
                        <li>{person["FFM of Left Leg"]}</li>
                        <li>{person["FFM% of Left Leg"]}%</li>
                        <li className={`highlight ${fitnessTypeVal(person["FFM% of Left Leg"])}`}>{fitnessTypeVal(person["FFM% of Left Leg"])}</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="info-box fitness-info-box">
                  <div className="info-text">
                    <h6>Body Fat Mass</h6>
                    <p>This is how much body fat you have, and combines both the surface level and internal fat. Below is a segmental representation of Body Fat mass.</p>
                  </div>
                </div>

                <div className="fitness-container">
                  <div className="image-container fat-image">
                    <div className="stat-block" id="fat-block-1">
                      <ul className="stat-list">
                        <li>{person["BFM of Trunk"]}</li>
                        <li>{person["BFM% of Trunk"]}%</li>
                        <li className={`highlight ${fitnessTypeVal(person["BFM% of Trunk"])}`}>{fitnessTypeVal(person["BFM% of Trunk"])}</li>
                      </ul>
                    </div>

                    <div className="stat-block" id="fat-block-2">
                      <ul className="stat-list">
                        <li>{person["BFM of Right Arm"]}</li>
                        <li>{person["BFM% of Right Arm"]}%</li>
                        <li className={`highlight ${fitnessTypeVal(person["BFM% of Right Arm"])}`}>{fitnessTypeVal(person["BFM% of Right Arm"])}</li>
                      </ul>
                    </div>

                    <div className="stat-block" id="fat-block-3">
                      <ul className="stat-list">
                        <li>{person["BFM of Right Leg"]}</li>
                        <li>{person["BFM% of Right Leg"]}%</li>
                        <li className={`highlight ${fitnessTypeVal(person["BFM% of Right Leg"])}`}>{fitnessTypeVal(person["BFM% of Right Leg"])}</li>
                      </ul>
                    </div>

                    <div className="stat-block" id="fat-block-4">
                      <ul className="stat-list">
                        <li>{person["BFM of Left Arm"]}</li>
                        <li>{person["BFM% of Left Arm"]}%</li>
                        <li className={`highlight ${fitnessTypeVal(person["BFM% of Left Arm"])}`}>{fitnessTypeVal(person["BFM% of Left Arm"])}</li>
                      </ul>
                    </div>

                    <div className="stat-block" id="fat-block-5">
                      <ul className="stat-list">
                        <li>{person["BFM of Left Leg"]}</li>
                        <li>{person["BFM% of Left Leg"]}%</li>
                        <li className={`highlight ${fitnessTypeVal(person["BFM% of Left Leg"])}`}>{fitnessTypeVal(person["BFM% of Left Leg"])}</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="info-box">
                  <div className="info-text">
                    <h6>Target Weight</h6>
                    <p>Target weight is indicative value of your ideal body weight. You should try to achieve this weight for balanced body composition.</p>
                  </div>
                </div>

                <div id="target-weight" className="circle-container">
                  <div className="circle">
                    <div className="circle-content">
                      {/* <h4 className="circle-title">target weight</h4> */}
                      <h6 className="circle-stat">{person["Target Weight"]}</h6>
                      <h6 className="circle-measurement">Kg</h6>
                    </div>
                  </div>
                </div>

                <div className="info-box">
                  <div className="info-text">
                    <h6>Basal Metabolic Rate</h6>
                    <p>The Basal Metabolic Rate, or BMR, is the number of calories you need in order to maintain your basic essential functions. This value works as guide for your nutritional plans, which is essential in helping you reach your body composition goals.</p>
                  </div>
                </div>

                <div id="target-weight" className="circle-container">
                  <div className="circle">
                    <div className="circle-content">
                      {/* <h4 className="circle-title">Basal Metabolic Rate</h4> */}
                      <h6 className="circle-stat">{person["BMR (Basal Metabolic Rate)"]}</h6>
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