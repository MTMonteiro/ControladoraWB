import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import * as d3 from "d3";

import MapSvg from "../actions/SVG/MapSvg";
import { Container, Row, Col } from "react-bootstrap";

import Card from "../components/Card/Card";

export default function Map() {
  const svgRef = useRef();

 

 const test = "#ap0002A3"

  useEffect(() => {
    const svg = svgRef.current

    // const ap0001 = [d3.select(svg).select('#ap0001A1'), d3.select(svg).select('#ap0001A2'), d3.select(svg).select('#ap0001A3')]
    // const ap0002 = [d3.select(svg).select('#ap0002A1'), d3.select(svg).select('#ap0002A2'), d3.select(svg).select('#ap0002A3')]
    // const ap0003 = [d3.select(svg).select('#ap0003A1'), d3.select(svg).select('#ap0003A2'), d3.select(svg).select('#ap0003A3')]
    // const ap0004 = [d3.select(svg).select('#ap0004A1'), d3.select(svg).select('#ap0004A2'), d3.select(svg).select('#ap0004A3')]

    // ap0001[0].attr("fill-opacity", "0")
    // ap0001[1].attr("fill-opacity", "0")
    // ap0001[2].attr("fill-opacity", "0")

    const ap = d3.select(svg).select('#ap0001A2')

    const ap1 = d3.select(svgRef.current).select(test) 
    ap1.attr("transform", "translate(50, 50)")
    
    ap.attr("fill", "blue")
      .attr("fill-opacity", "0")
      .text("opaaaaaaaaaaaaaaaaaaaa")

    console.log(ap)
    console.log("entrou no use")
    // ap0002[0].attr("fill-opacity", "0")
    // ap0002[1].attr("fill-opacity", "0")
    // ap0002[2].attr("fill-opacity", "0")

    // ap0003[0].attr("fill-opacity", "0")
    // ap0003[1].attr("fill-opacity", "0")
    // ap0003[2].attr("fill-opacity", "0")

  }, test);

  return (
    <div className="content" style={{display: "flex", alignItems:"column"}}>
      <Container fluid style={{ alignItems: "center", justifyContent:"center", flexDirection:"column" }}>
        <Row>
          <Col md={12}>
            <Card
              title="Mapa de cobertura"
              ctAllIcons
              category="mapas"
              content={
                <Container>
                  <MapSvg ref={svgRef}></MapSvg>
                </Container>
              }
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

// const Container = styled.div`
//   height: 100%;
//   > svg {
//     height: 100%;
//     width: 100%;
//   }
// `;
