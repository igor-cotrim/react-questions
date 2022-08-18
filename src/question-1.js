import React from 'react';

const Question1 = (props) => {
  const [values, setValues] = React.useState(new Array(props.amount).fill({"value": "down"}));

  const toggleCard = (clickedCardIndex) => {
    setValues((prev) => prev.map((el, index) => {
      if (clickedCardIndex === index) {
        return {...el, value: "up"}
      }

      return {...el, value: "down"}
    }))
  }

  return (
    <table>
      <tbody>
        <tr>
          {values.map((item, index) => (
            <td
              key={index}
              onClick={() => toggleCard(index)}
            >
              {item.value}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

export default Question1;
