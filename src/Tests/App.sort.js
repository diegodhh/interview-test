import React from "react";

const List = (props) => {
  const [index, setIndex] = React.useState(0);
  return (
    <ul>
      {props.items
        .map((item, i) => {
          return (
            <li onClick={() => setIndex(i)} index={`${i}-${item}`}>
              {item}
            </li>
          );
        })
        .reduce((acumm, value, i) => {
          if (index === i) {
            acumm.unshift(value);
          } else {
            acumm.push(value);
          }
          return acumm;
        }, [])}
    </ul>
  );
};
export default () => <List items={["A", "B", "C"]} />;
