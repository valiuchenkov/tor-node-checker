import github from "../../assets/images/github.png";

import "./footer.scss";


export default function Footer() {
  return (
    <footer>
      <a id="github-repo-link" href="https://github.com" target="_blank">
        <img src={github} alt="github"/>
      </a>

      <small id="copyright">© Vladislav V. V.</small>
    </footer>
  );
}
