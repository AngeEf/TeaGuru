// import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import { NavLink } from 'react-router-dom';

// function Navigationbar({ currUser, logOutHandler }) {
//   return (
//     <Navbar bg="light" expand="lg">
//       <Container>
//         <Navbar.Brand href="/"><img src="/images/logo.png" alt="logo" style={{ width: 150, height: 150 }} /></Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link  to="/" style={{ fontFamily: "Arial", fontWeight: "bold", fontSize: 20}}>Home</NavLink>

//             <.span >
//               {!currUser.id ? <Nav.Link  to="/user/registration">registration</NavLink> : currUser.name }
//             </span>

//             {currUser.id ? (
//               <Nav.Link  onClick={logOutHandler}>Logout</NavLink>
//             ) : (
//               <Nav.Link  to="/user/authorization">authorization</NavLink>
//             )}
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default Navigationbar;
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

function Navigationbar({ currUser, logOutHandler }) {
  return (
    <Navbar bg="light" variant="light" expand="lg">
      <Container>
        <Navbar.Brand href="/"><img src="/images/logo.png" alt="logo" style={{ width: 100, height: 100 }} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to="/" style={{ fontFamily: 'Arial', fontWeight: 'bold', fontSize: 20 }}>Home</Nav.Link>
            {!currUser.id ? <Nav.Link to="/user/registration" style={{fontFamily: 'Arial', fontWeight: 'bold', fontSize: 20 }}>Registration</Nav.Link> : currUser.name }

            {currUser.id ? (
              <Nav.Link onClick={logOutHandler} style={{ fontFamily: 'Arial', fontWeight: 'bold', fontSize: 20 }}>Logout</Nav.Link>
            ) : (
              <Nav.Link to="/user/authorization" style={{ fontFamily: 'Arial', fontWeight: 'bold', fontSize: 20 }}>Authorization</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigationbar;
