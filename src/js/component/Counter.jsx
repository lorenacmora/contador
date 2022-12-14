import React, { useState, useEffect } from "react";

const Counter = () => {
  let [seconds, setSeconds] = useState(0);
  
  useEffect (() => {
    let Interval = setInterval(() => {

      setSeconds(seconds += 1)}, 1000)
       
    return () => clearInterval(Interval);
},[])
  return (
      <div className="container border-rounded border fs-1 text-center bg-black">
      <div className="d-flex bd-highlight ">
        <div>< i className="far fa-clock p-2 m-2 text-center "></i></div>
        <div className="p-2 m-2 flex-fill border-rounded border fs-1 text-center bd-highlight  p-2 m-2">{Math.floor((seconds/10000000)%10)}</div>
        <div className="p-2 m-2 flex-fill border-rounded border fs-1 text-center bd-highlight  p-2 m-2">{Math.floor((seconds/1000000)%10)}</div>
        <div className="p-2 m-2 flex-fill border-rounded border fs-1 text-center bd-highlight  p-2 m-2">{Math.floor((seconds/100000)%10)}</div>
        <div className="p-2 m-2 flex-fill border-rounded border fs-1 text-center bd-highlight  p-2 m-2">{Math.floor((seconds/10000)%10)}</div>
        <div className="p-2 m-2 flex-fill border-rounded border fs-1 text-center bd-highlight  p-2 m-2">{Math.floor((seconds/1000)%10)}</div>
        <div className="p-2 m-2 flex-fill border-rounded border fs-1 text-center bd-highlight  p-2 m-2">{Math.floor((seconds/100)%10)}</div>
        <div className="p-2 m-2 flex-fill border-rounded border fs-1 text-center bd-highlight  p-2 m-2">{Math.floor((seconds/10)%10)}</div>
        <div className="p-2 m-2 flex-fill border-rounded border fs-1 text-center bd-highlight  p-2 m-2">{Math.floor((seconds/1)%10)}</div>
      </div>
    </div>
    );
  }
export default Counter;
