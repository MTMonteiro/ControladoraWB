/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";

import Button from "../components/CustomButton/CustomButton.jsx";

// class Notifications extends Component {
function Notifications(props) {
  // render() {

  return (
    <div className="content" style={{height:"100vh"}}>
      <Container fluid>
        <div className="card">
          <div className="header">
            <h4 className="title">Notificações</h4>
            <p className="category">Notificações do sistema.</p>
          </div>
          <div className="content">
            <Row>
              <Col md={6}>
                <h5>Você ainda não possui notificações.</h5>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </div>
  );
}
// }

export default Notifications;
