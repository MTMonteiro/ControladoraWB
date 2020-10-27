import React, { Component } from "react";
import Container from 'react-bootstrap/Container'

import './Footer.css'

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <Container fluid>
          <nav className="pull-left">
            <ul>
              <li>
                <a href="/admin/dashboard">Home</a>
              </li>
              <li>
                <a href="https://redeoncorp.com.br/">Company</a>
              </li>
              <li>
                <a href="https://redeoncorp.com.br/link-dedicado/">Portfolio</a>
              </li>
              <li>
                <a href="https://redeoncorp.com.br/fale-conosco/">Contato</a>
              </li>
            </ul>
          </nav>
          <p className="copyright pull-right">
            &copy; {new Date().getFullYear()}{" "}
            <a href="https://redeoncorp.com.br/">
              RedeOnCorp
            </a>
          </p>
        </Container>
      </footer>
    );
  }
}

export default Footer;
