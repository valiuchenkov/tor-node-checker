import logo from "../../assets/images/icons/logo-192.png";

import "./header.scss";


export default function Header() {
  return (
    <header>
      <figure id="logo">
        <img src={logo} alt="logo"/>
        <figcaption>TOR Relay Checker</figcaption>
      </figure>

      <small id="app-version">v1.0.0</small>
    </header>
  );
}
