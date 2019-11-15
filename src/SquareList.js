import React,{useState} from "react";
import { Square } from "./Square";

const nrRows = 3;
export const SquareList = () => {
  const [sum,setSum] = useState(0);

  const getNewSum = (val) => {
    console.log(val);
    console.log(`Sum ${sum}`);
    let newSum = sum + val;
    console.log(`new sum ${newSum}`)
    setSum(newSum);
    console.log(sum);
  }
  let items = [];

  for (let i = 1; i <= nrRows; i++) {
    let item = [];
    for (let j = 1; j <= 3; j++) {
      item.push(<Square sum={sum} getNewSum={getNewSum} key={3 * (i - 1) + j} number={3 * (i - 1) + j} />);
    }
    items.push(<div key={i}>{item}</div>);
  }
  return <div className="Container">{items}</div>;
};
