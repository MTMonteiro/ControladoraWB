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
import { Table, Container, Row, Col } from "react-bootstrap";

import Card from "../components/Card/Card";


class Icons extends Component {
  render() {
    return (
      <div className="content">
        <Container fluid>
          <Row>
            <Col md={8} mdOffset={2}>
              <Card
                hCenter
                title="Upgrade para controladora PRO"
                category="Are you looking for more components? Please check our Premium Version of Light Bootstrap Dashboard React."
                ctTableResponsive
                ctTableFullWidth
                ctTableUpgrade
                content={
                  <Table>
                    <thead>
                      <tr>
                        <th />
                        <th className="text-center">Free</th>
                        <th className="text-center">PRO</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Dispositivos</td>
                        <td>30</td>
                        <td>60</td>
                      </tr>
                      <tr>
                        <td>Automação</td>
                        <td>Não</td>
                        <td>Sim</td>
                      </tr>
                      <tr>
                        <td>Example Pages</td>
                        <td>7</td>
                        <td>24</td>
                      </tr>
                      
                      <tr>
                        <td>Premium Support</td>
                        <td>
                          <i className="fa fa-times text-danger" />
                        </td>
                        <td>
                          <i className="fa fa-check text-success" />
                        </td>
                      </tr>
                      <tr>
                        <td />
                        <td>Free</td>
                        <td>Just $49</td>
                      </tr>
                      <tr>
                        <td />
                        <td>

                        </td>
                        <td>

                        </td>
                      </tr>
                    </tbody>
                  </Table>
                }
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Icons;