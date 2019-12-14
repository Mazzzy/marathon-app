import React, { useState } from "react";
import { FormGroup, ControlLabel } from "react-bootstrap";
import LoaderButton from "../../components/loader-button/LoaderButton";
import "./Login.css";
import AuthProvider from "../../auth/AuthProvider";
import Home from "../home/Home";

function MSLogin(props) {
  const [isLoading, setIsLoading] = useState(false);
  
  async function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    try {
      await props.onSignIn(event);
      setIsLoading(true);
      props.userHasAuthenticated(true);
    } catch (e) {
        alert(e.message);
        setIsLoading(false);
    }
  }

  return (!props.account  ? (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="email" bsSize="large">
          <ControlLabel>Hit the Login</ControlLabel>
        </FormGroup>
        <LoaderButton
            block
            type="submit"
            bsSize="large"
            isLoading={isLoading}
        >
          MS Login
        </LoaderButton>
      </form>
    </div>)
    :(<Home props={props}/>)
  );
}
export default AuthProvider(MSLogin);