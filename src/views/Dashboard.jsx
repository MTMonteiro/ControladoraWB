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
import ChartistGraph from "react-chartist";
import { Container, Row, Col } from "react-bootstrap";

import { Card } from "../components/Card/Card.jsx";
import { StatsCard } from "../components/StatsCard/StatsCard.jsx";
import {
  legendPie,
  optionsSales,
  responsiveSales,
  legendSales,
  optionsBar,
  responsiveBar,
  legendBar
} from "../variables/Variables.jsx";

import { Doughnut, Line } from 'react-chartjs-2';

import {dataSales} from '../graficos/UsuariosXAP.jsx'
import {dataUpDown} from '../graficos/UpXDown.jsx'

function Dashboard()  {

  const createLegend = (json) => {
    var legend = [];
    for (var i = 0; i < json["names"].length; i++) {
      var type = "fa fa-circle text-" + json["types"][i];
      legend.push(<i className={type} key={i} />);
      legend.push(" ");
      legend.push(json["names"][i]);
    }
    return legend;
  }

  var json = require('../data/file.json');
// console.log(json.datapie);
// console.log(dataPie);

var mem = parseInt((json["10.200.0.21"].memoria_usada / json["10.200.0.21"].memoria_total) * 100)

const l = ["10.200.0.21", "10.200.0.22", "10.200.0.23", "10.200.0.24"]
var i =0;
var usuarios = 0;
for(i; i<l.length; i++){
  usuarios += parseInt(json[l[i]].usuarios)
}


console.log("dataSales",dataSales)

// chart js pie


var dataBar = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Mai",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  series: [
    [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895],
  ]
};




return (
      <div className="content">
        <Container fluid>
          <Row>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-server text-warning" />}
                statsText="Memoria"
                statsValue={mem + "%"}
                statsIcon={<i className="fa fa-refresh" />}
                statsIconText={json["10.200.0.21"].time}
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-users text-success" />}
                statsText="Usuarios"
                statsValue={usuarios}
                statsIcon={<i className="fa fa-calendar-o" />}
                statsIconText={json["10.200.0.21"].time}
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-display1 text-danger" />}
                statsText="APS UP / DOWN"
                statsValue={json.up + " / " + json.down}
                statsIcon={<i className="fa fa-clock-o" />}
                statsIconText="In the last hour"
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-signal text-info" />}
                statsText="SSID"
                statsValue="Coletor-WMS"
                statsIcon={<i className="fa fa-refresh" />}
                statsIconText="Updated now"
              />
            </Col>
          </Row>
          <Row>
            <Col md={8}>
              <Card
                statsIcon="fa fa-history"
                id="chartHours"
                title="Users Behavior"
                category="24 Hours performance"
                stats="Updated 3 minutes ago"
                content={
                    <Line data={dataSales} />
                   
                      // data={dataSales}
                      // type="Line"
                      // options={optionsSales}
                      // responsiveOptions={responsiveSales}
                    

                }
              />
            </Col>
            <Col md={4}>
              <Card
                statsIcon="fa fa-clock-o"
                title="Email Statistics"
                category="Last Campaign Performance"
                stats="Campaign sent 2 days ago"
                content={
                  <div
                    id="chartPreferences"
                    className="ct-chart ct-perfect-fourth"
                  >
                    <ChartistGraph data={json.datapie} type="Pie" />
                  </div>
                }
                legend={
                  <div className="legend">{createLegend(legendPie)}</div>
                }
              />
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Card
                id="chartActivity"
                title="2014 Sales"
                category="All products including Taxes"
                stats="Data information certified"
                statsIcon="fa fa-check"
                content={
                  <div className="ct-chart">
                    <ChartistGraph
                      data={dataBar}
                      type="Bar"
                      options={optionsBar}
                      responsiveOptions={responsiveBar}
                    />
                  </div>
                }
                legend={
                  <div className="legend">{createLegend(legendBar)}</div>
                }
              />
            </Col>

            <Col md={6}>
              <Card
                title="Status Aps"
                category="Grafico aps up/down"
                stats={json["10.200.0.21"].time}
                statsIcon="fa fa-history"
                content={
                  <div className="table-full-width">
                    <Doughnut data={dataUpDown} />
                  </div>
                }
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

export default Dashboard;
