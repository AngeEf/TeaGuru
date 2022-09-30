import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import { NavLink } from 'react-router-dom';

function Navigationbar({ currUser, logOutHandler }) {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/">
          <img src="/tea-cup.svg" alt="logo" style={{ height: 50, paddingRight: '20px', fontWeight: 'bold' }} />
          TeaGuru
        </Navbar.Brand>

        <Nav className="me-auto">
          <Nav.Link className="navlink" to="/">Home</Nav.Link>
          {!currUser.id ? (
            <Nav.Link className="navlink" to="/user/registration">Registration</Nav.Link>
          ) : <Nav.Link className="navlink" to="#">{currUser.name}</Nav.Link> }

          {currUser.id ? (
            <Nav.Link className="navlink" onClick={logOutHandler}>Sign out</Nav.Link>
          ) : (
            <Nav.Link className="navlink" to="/user/authorization">Sign in</Nav.Link>
          )}
        </Nav>
      </Container>
    </Navbar>
  // / ///////////////////////////////////////////////////////////////////////////////////////////////////
  // <Navbar bg="light" expand="lg">
  //   <Container>
  //     <Navbar.Brand href="/">
  //       <img src="/tea-cup.svg" alt="logo" style={{ height: 50, paddingRight: '20px', fontWeight: 'bold' }} />
  //       TeaGuru
  //     </Navbar.Brand>
  //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
  //     <Navbar.Collapse id="basic-navbar-nav">
  //       <Nav className="me-auto" style={{ fontWeight: 'normal' }}>
  //         <NavLink
  //           className="navlink"
  //           to="/"

  //         >
  //           Home
  //         </NavLink>

  //         <span className="navlink">
  //           {!currUser.id ? (
  //             <NavLink
  //               className="navlink"

  //               to="/user/registration"
  //             >
  //               Registration
  //             </NavLink>
  //           ) : currUser.name }
  //         </span>

  //         {currUser.id ? (
  //           <NavLink
  //             className="navlink"

  //             onClick={logOutHandler}
  //           >
  //             Sign out

  //           </NavLink>
  //         ) : (
  //           <NavLink
  //             className="navlink"

  //             to="/user/authorization"
  //           >
  //             Sign in

  //           </NavLink>
  //         )}
  //       </Nav>
  //     </Navbar.Collapse>
  //   </Container>
  // </Navbar>
  );
}

export default Navigationbar;
// import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import { NavLink } from 'react-router-dom';

// function Navigationbar({ currUser, logOutHandler }) {
//   return (
//     <Navbar bg="light" variant="light" expand="lg">
//       <Container>
//         <Navbar.Brand href="/"><img src="/images/logo.png" alt="logo" style={{ width: 100, height: 100 }} /></Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link to="/" style={{ fontFamily: 'Arial', fontWeight: 'bold', fontSize: 20 }}>Home</Nav.Link>
//             {!currUser.id ? <Nav.Link to="/user/registration" style={{ fontFamily: 'Arial', fontWeight: 'bold', fontSize: 20 }}>Registration</Nav.Link> : currUser.name }

//             {currUser.id ? (
//               <span className="nav-link" onClick={logOutHandler}>Logout</span>
//             ) : (
//               <Nav.Link to="/user/authorization" style={{ fontFamily: 'Arial', fontWeight: 'bold', fontSize: 20 }}>Authorization</Nav.Link>
//             )}
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default Navigationbar;
