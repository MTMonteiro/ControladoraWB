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
import React, { Component } from "react";
import { Container, Row, Col, Table } from "react-bootstrap";

import Card from "../components/Card/Card.jsx";
import { thArray, tdArray } from "../variables/Variables.jsx";

var usersTable = require("../actions/SNMP/test.json")

console.log("usersTable",usersTable)

class TableList extends Component {
  render() {
    return (
      <div className="content">
        <Container fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Clientes wireless"
                category="Dispositivos conectados na rede wifi"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover>
                    <thead>
                      <tr>
                          <th >MAC</th>
                          <th >IP</th>
                          <th >POTÊNCIA</th>
                      </tr>
                    </thead>
                    <tbody>
                      {usersTable.map((data, key) => {
                        console.log(data)
                        return (
                          <tr key={key}>
                            <td key={key}>{data.mac}</td>
                            <td key={key}>{data.ap}</td>
                            <td key={key}>{data.potencia}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                }
              />
            </Col>

            {/* <Col md={12}>
              <Card
                plain
                title="Striped Table with Hover"
                category="Here is a subtitle for this table"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table hover>
                    <thead>
                      <tr>
                        {thArray.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {tdArray.map((prop, key) => {
                        return (
                          <tr key={key}>
                            {prop.map((prop, key) => {
                              return <td key={key}>{prop}</td>;
                            })}
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                }
              />
            </Col> */}
          </Row>
        </Container>
      </div>
    );
  }
}

export default TableList;
