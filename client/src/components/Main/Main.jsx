import { useState } from "react";

import inputValidator from "../../api/inputValidator";

import ErrorMessage from "./ErrorMessage/ErrorMessage";

import loop from "../../assets/images/loop.png";

import "./main.scss";


export default function Main() {
  const [results, setResults] = useState("");

  function formHandler(event) {
    event.preventDefault();

    const result = inputValidator(event);

    if (result.isValid)
      return setResults("Checking...");

    setResults(
      <ErrorMessage message={result.error} />
    );
  }

  return (
    <main>
      <form onSubmit={formHandler}>
        <input name="ip" placeholder="Enter IP to check" />

        <button type="submit">
          <img src={loop} alt="Check" />
        </button>
      </form>

      <div id="results">
        {results}
      </div>
    </main>
  );
}
