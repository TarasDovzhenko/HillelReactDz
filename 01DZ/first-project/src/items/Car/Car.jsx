import React from "react"
import s from "./Car.module.css";

function Car() {
  return (
    <ul className={s.item}>
      <li>BMW</li>
      <li>Audi</li>
      <li>Mercedes</li>
    </ul>
  );
}

export default Car;
