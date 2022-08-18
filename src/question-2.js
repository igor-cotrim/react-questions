import React from 'react';

// React is loaded and is available as React and ReactDOM
// imports should NOT be used
const OPERATIONS = {
  ADD: "ADD",
  SUBTRACT: "SUBTRACT"
};

function App() {
  const [number, updateNumber] = React.useState(0);

  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        return state + number;
      case "SUBTRACT":
        return state - number;
      default:
        return state;
    }
  };

  const [state, dispatch] = React.useReducer(reducer, 0);

  const add = () => dispatch({type: OPERATIONS.ADD});
  const subtract = () => dispatch({type: OPERATIONS.SUBTRACT});

  const handleNumberChange = e => updateNumber(Number(e.target.value));

  return (
    <div>
      <div id="result">{state}</div>
      <div>
        <button id="add" onClick={add}>Add</button>
        <button id="subtract" onClick={subtract}>Subtract</button>
      </div>
      <div>
        <input type="text" value={number} onChange={handleNumberChange} />
      </div>
    </div>
  );
}

export default App