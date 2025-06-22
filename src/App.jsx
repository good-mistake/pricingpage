import { useState } from "react";
import "./App.scss";

function App() {
  const [btnState, setBtnState] = useState(false);
  return (
    <div className="App">
      <header>
        <h3>Our Pricing</h3>
        <div>
          <p>Annually</p>
          <button
            onClick={() => setBtnState((prev) => !prev)}
            className={btnState ? "monthly" : "annually"}
          >
            <span></span>
          </button>
          <p>Monthly</p>
        </div>
      </header>

      <main>
        <ul>
          <li className="Basic">
            <p>Basic</p>

            <h2 className={`price ${btnState ? "show" : "hide"}`}>
              {" "}
              <span>$</span>19.99
            </h2>

            <h2 className={`price ${btnState ? "hide" : "show"}`}>
              <span>$</span>199.99
            </h2>

            <p>500 GB Storage</p>
            <p>2 Users Allowed</p>
            <p>Send up to 3 GB</p>
            <button>LEARN MORE</button>
          </li>
          <li className="Proffesional">
            <p>Proffesional</p>

            <h2 className={`price ${btnState ? "show" : "hide"}`}>
              <span>$</span>24.99
            </h2>

            <h2 className={`price ${btnState ? "hide" : "show"}`}>
              <span>$</span>249.99
            </h2>

            <p>1 TB Storage</p>
            <p>5 Users Allowed</p>
            <p>Send up to 10 GB</p>
            <button>LEARN MORE</button>
          </li>{" "}
          <li className="Master">
            <p>Master</p>

            <h2 className={`price ${btnState ? "show" : "hide"}`}>
              <span>$</span>39.99
            </h2>

            <h2 className={`price ${btnState ? "hide" : "show"}`}>
              <span>$</span>399.99
            </h2>

            <p>2 TB Storage</p>
            <p>10 Users Allowed</p>
            <p>Send up to 20 GB</p>
            <button>LEARN MORE</button>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
