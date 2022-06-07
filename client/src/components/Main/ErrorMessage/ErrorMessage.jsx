import error from "../../../assets/images/error.png";

import "./errorMessage.scss";


export default function ErrorMessage({ message }) {
  return (
    <div id="error-message">
      <img src={error} alt="error" />
      <p>{message}</p>
    </div>
  );
}
