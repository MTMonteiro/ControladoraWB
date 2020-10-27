import React from "react";
import ChartistGraph from "react-chartist";
import { Container, Row, Col } from "react-bootstrap";

import { Card } from "../components/Card/Card.jsx";
import { StatsCard } from "../components/StatsCard/StatsCard.jsx";
import {
  optionsBar,
  responsiveBar,
  legendBar,
} from "../variables/Variables.jsx";

import { Doughnut, Line, Pie, Bar } from "react-chartjs-2";

import { dataSales, chartDefaultOptions } from "../graficos/UsuariosXAP.jsx";
import { dataUsuarioMes } from "../graficos/UsuariosXMes.jsx";
import { dataUpDown } from "../graficos/UpXDown.jsx";
import { dataPie } from "../graficos/Tipo_Trafego.jsx";

function Dashboard() {
  var json = require("../data/file.json");

  var mem = parseInt(
    (json["10.200.0.21"].memoria_usada / json["10.200.0.21"].memoria_total) *
      100
  );

  const l = ["10.200.0.21", "10.200.0.22", "10.200.0.23", "10.200.0.24"];
  var i = 0;
  var usuarios = 0;
  for (i; i < l.length; i++) {
    usuarios += parseInt(json[l[i]].usuarios);
  }

  return (
    <div className="content">
      <Container fluid>
        <Row>
          <Col lg={3} sm={6}>
            <StatsCard
              bigIcon={<i className="pe-7s-server text-warning" />}
              statsText="HDD"
              statsValue={mem + "%"}
              statsIcon={<i className="fa fa-refresh" />}
              statsIconText={json["10.200.0.21"].time}
            />
          </Col>
          <Col lg={3} sm={6}>
            <StatsCard
              bigIcon={<i className="pe-7s-users text-success" />}
              statsText="Usuários"
              statsValue={usuarios}
              statsIcon={<i className="fa fa-calendar-o" />}
              statsIconText={json["10.200.0.21"].time}
            />
          </Col>
          <Col lg={3} sm={6}>
            <StatsCard
              bigIcon={<i className="pe-7s-display1 text-danger" />}
              statsText="APs UP / DOWN"
              statsValue={json.up + " / " + json.down}
              statsIcon={<i className="fa fa-clock-o" />}
              statsIconText={json["10.200.0.21"].time}
            />
          </Col>
          <Col lg={3} sm={6}>
            <StatsCard
              bigIcon={<i className="pe-7s-signal text-info" />}
              statsText="Consumo (mês)"
              statsValue={json["tx"] + " MB"}
              statsIcon={<i className="fa fa-refresh" />}
              statsIconText={json["10.200.0.21"].time}
            />
          </Col>
        </Row>
        <Row>
          <Col md={8}>
            <Card
              statsIcon="fa fa-history"
              id="chartHours"
              title="Número de usuários"
              category="por dispositivo"
              stats={json["10.200.0.21"].time}
              content={<Line data={dataSales} options={chartDefaultOptions} />}
            />
          </Col>
          <Col md={4}>
            <Card
              statsIcon="fa fa-clock-o"
              title="Protocolos"
              category="Top 3 utilizados."
              stats={json["10.200.0.21"].time}
              content={<Pie width={700} height={700} data={dataPie} />}
            />
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Card
              id="chartActivity"
              title="Usuários X Mês"
              category="Média do número de usuários por mês"
              stats={json["10.200.0.21"].time}
              statsIcon="fa fa-check"
              content={
                <Bar data={dataUsuarioMes} options={chartDefaultOptions} />
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
