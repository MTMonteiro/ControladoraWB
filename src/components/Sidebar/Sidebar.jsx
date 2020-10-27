import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import Menu from "../Menu";

import logo from "../../assets/img/RedeOn.jpeg";


class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
    };
  }
  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }
  updateDimensions() {
    this.setState({ width: window.innerWidth });
  }
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }
  render() {
    const sidebarBackground = {
      backgroundImage: "url(" + this.props.image + ")"
    };
    return (
      <div
        id="sidebar"
        className="sidebar"
        data-color={this.props.color}
        data-image={this.props.image}
      >
          {this.props.hasImage ? (
            <div className="sidebar-background" style={sidebarBackground} />
          ) : (
            null
          )}
        <div className="logo" style={{backgroundColor:"white"}}>
          <a
            href="/"
            className="simple-text logo-mini"
          >
            <div className="logo-img" style={{ marginTop:"-9px"}}>
              <img src={logo} alt="logo_image" />
            </div>
          </a>
          <a
            href="https://redeoncorp.com.br/"
            className="simple-text logo-normal"
            style={{color:"rgb(163, 39, 39)", fontWeight: 900 }}
          >
            RedeOn Corp
          </a>

        </div>
        <div className="sidebar-wrapper">
          <ul className="nav">
            {this.state.width <= 991 ? <Menu /> : null}
            {this.props.routes.map((prop, key) => {
              if (!prop.redirect)
                return (
                  <li
                    className={
                      prop.upgrade
                        ? "active active-pro"
                        : this.activeRoute(prop.layout + prop.path)
                    }
                    key={key}
                  >
                    <NavLink
                      to={prop.layout + prop.path}
                      className="nav-link"
                      activeClassName="active"
                    >
                      <i className={prop.icon} />
                      <p>{prop.name}</p>
                    </NavLink>
                  </li>
                );
              return null;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Sidebar;
