import React from 'react';
import ReactDOM from 'react-dom/client';

import Question1 from './question-1';
// import Question2 from './question-2';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Question1 amount={4} />
  // <Question2 />
);


//Question 1
let row = document.getElementById("root").getElementsByTagName("tr")[0];
if(row) {
  let cell = row.getElementsByTagName("td")[1];
  if(cell) {
    cell.click();
  }
}

setTimeout(() => console.log(document.getElementById("root").innerHTML));