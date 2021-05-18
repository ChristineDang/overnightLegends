import React from "react";
import "./App.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Jumbotron, Table } from "react-bootstrap";
//import background from "./background/doodle-icon.jpg";
import emote from "./background/choncc_panda_nice.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbarf from "./components/nav";
// import Menu from "./components/menu";
//import selectionpg from "./components/selection";
import Selections from "./components/carousel";
import Footer from "./components/footer";
import Socials from "./components/socials";
import ToggleModal from "./components/toggleModal";
// const backgroundImg = {
//   width: "fill",
//   height: "150vh",

//   backgroundImage: `url(${background})`,
//   backgroundPosition: "center",
//   backgroundRepeat: "no-repeat",
//   backgroundSize: "cover",

//   // opacity: '0.08',
// };

function App() {
  return (
    <div className="App">
      <Navbarf></Navbarf>
      <ToggleModal />
      <Jumbotron className="App-header">
        <h1 className="overnight">OVERNIGHT</h1>
      </Jumbotron>
      <Container className="main-container">
        {/* Grid System */}
        <Row className="justify-content-md-center companyName">
          <Col md={5}>
            <h1 className="legends">LEGENDS</h1>
          </Col>
        </Row>
        {/* Introduction Content */}
        <Row className="justify-content-md-center introduction">
          <Col></Col>
          <Col xs={6} className="introScript">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Col>
          <Col className="introImg">
            <Card style={{ background: "none", border: "none" }}>
              <Card.Img variant="top" src={emote} />
            </Card>
          </Col>
        </Row>
        {/* Selection for User */}
        <Row className="justify-content-md-center selections">
          <Selections></Selections>
        </Row>
      </Container>
      <Row className="recent-customer">
        <Col xs={4}>
          <h1 className="customer-header">Recent Customers</h1>
        </Col>
        <Col className="justify-content-md-center">
          <Table striped bordered hover responsive variant="dark">
            <thead>
              <tr>
                <th>Top Customers</th>
                <th>Username</th>
                <th>Twitch Link</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>formosaboba</td>
                <td>
                  <a href="https://twitch.com/formosaboba">formosaboba</a>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Larry the Bird</td>
                <td>formosaboba</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
      <Socials></Socials>
      <Footer></Footer>
    </div>

    // <div className="App" style={backgroundImg}>
    //     <Jumbotron className="App-header">
    //       <h1>OVERNIGHT</h1>
    //     </Jumbotron>
    //     <div className="container">
    //       <div className="row">
    //         <div className="col md-3">
    //           <p>1 of 3</p>
    //         </div>
    //       </div>
    //     </div>
    // </div>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
