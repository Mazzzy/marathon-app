import React, { useState, useEffect } from 'react';
import { Link, withRouter } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import './App.css';
import Routes from "../../routes/Routes";
import AuthProvider from "../../auth/AuthProvider";
import PersonDetails from "../person-details/PersonDetails";

function App(props) {
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [isAuthenticated, userHasAuthenticated] = useState(false);

  useEffect(() => {
    onLoad();
  }, []);
  
  async function onLoad() {
    try {
      userHasAuthenticated(props.account);
    }
    catch(e) {
      if (e !== 'No current user') {
        alert(e);
      }
    }
  
    setIsAuthenticating(false);
  }

  async function handleLogout() {
    try {
      await props.onSignOut();
      userHasAuthenticated(false);
    }
    catch(e) {
      if (e !== 'No current user') {
        alert(e);
      }
    }
    
  }

  // return (
  //   !isAuthenticating &&
  //   <div className="App container-fluid">
  //     <Navbar fluid collapseOnSelect>
  //       <Navbar.Header>
  //         <Navbar.Brand>
  //           <Link to="/">Marathon Admin</Link>
  //         </Navbar.Brand>
  //         <Navbar.Toggle />
  //       </Navbar.Header>
  //       <Navbar.Collapse>
  //         <Nav pullRight>
  //           {isAuthenticated || props.account
  //             ? (<>
  //               <NavItem>{(!props.graphProfile)? '': props.graphProfile.displayName }</NavItem>
  //               <NavItem onClick={handleLogout}>Logout</NavItem>
  //               </>
  //             )
  //             : (<>
  //                 {/* <LinkContainer to="/login">
  //                   <NavItem>Login</NavItem>
  //                 </LinkContainer> */}
  //               </>)
  //           }
  //         </Nav>
  //       </Navbar.Collapse>
  //     </Navbar>
  //     <Routes appProps={{ isAuthenticated, userHasAuthenticated }} />
  //   </div>
  // );
  return (
    <div className="container-fluid">
      <PersonDetails />
    </div>
  );
}

export default withRouter(AuthProvider(App));
