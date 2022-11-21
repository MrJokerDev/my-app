import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="display">
        <input type="text" />
      </div>

      <div className="keys">
        <p>
          <button className="button black" defaultValue="clear">
            CE
          </button>
          <button className="button black" defaultValue="C">
            C
          </button>
        </p>

        <p>
          <button className="button black" value="7" name="7">
            7
          </button>
          <button className="button black" value="8">
            8
          </button>
          <button className="button black" value="9">
            9
          </button>
          <button className="button pink" value="+">
            +
          </button>
        </p>

        <p>
          <button className="button black" value="4">
            4
          </button>
          <button className="button black" value="5">
            5
          </button>
          <button className="button black" value="6">
            6
          </button>
          <button className="button pink" value="-">
            -
          </button>
        </p>

        <p>
          <button className="button black" value="1">
            1
          </button>
          <button className="button black" value="2">
            2
          </button>
          <button className="button black" value="3">
            3
          </button>
          <button className="button pink" value="*">
            *
          </button>
        </p>

        <p>
          <button className="button black" value="0">
            0
          </button>
          <button className="button black" value=".">
            .
          </button>
          <button className="button orange" value="=">
            =
          </button>
          <button className="button pink" value="/">
            /
          </button>
        </p>
      </div>
    </div>
  );
};

export default App;
