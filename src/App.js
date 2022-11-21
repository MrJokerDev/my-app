import { useState } from "react";
import "./App.css";
import * as math from "mathjs";

const App = () => {
  const [result, setResult] = useState(0);

  const btnClick = (e) => {
    var value = e.target.value;
    console.log(value);
  };

  const clear = () => {
    setResult(result.toString().slice(0, -1));
  };

  const zero = () => {
    setResult(0);
  };

  return (
    <div className="App">
      <div className="display">
        <input type="text" value={result} />
      </div>

      <div className="keys">
        <p>
          <button className="button black" onClick={zero} defaultValue="clear">
            CE
          </button>
          <button className="button black" onClick={clear} defaultValue="C">
            C
          </button>
        </p>

        <p>
          <button
            className="button black"
            onClick={btnClick}
            value="7"
            name="7"
          >
            7
          </button>
          <button className="button black" onClick={btnClick} value="8">
            8
          </button>
          <button className="button black" onClick={btnClick} value="9">
            9
          </button>
          <button className="button pink" onClick={btnClick} value="+">
            +
          </button>
        </p>

        <p>
          <button className="button black" onClick={btnClick} value="4">
            4
          </button>
          <button className="button black" onClick={btnClick} value="5">
            5
          </button>
          <button className="button black" onClick={btnClick} value="6">
            6
          </button>
          <button className="button pink" onClick={btnClick} value="-">
            -
          </button>
        </p>

        <p>
          <button className="button black" onClick={btnClick} value="1">
            1
          </button>
          <button className="button black" onClick={btnClick} value="2">
            2
          </button>
          <button className="button black" onClick={btnClick} value="3">
            3
          </button>
          <button className="button pink" onClick={btnClick} value="*">
            *
          </button>
        </p>

        <p>
          <button className="button black" onClick={btnClick} value="0">
            0
          </button>
          <button className="button black" onClick={btnClick} value=".">
            .
          </button>
          <button className="button orange" onClick={btnClick} value="=">
            =
          </button>
          <button className="button pink" onClick={btnClick} value="/">
            /
          </button>
        </p>
      </div>
    </div>
  );
};

export default App;
