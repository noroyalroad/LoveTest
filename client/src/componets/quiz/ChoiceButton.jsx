import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ChoiceButton = ({ increindex, renderquesion, renderimg, index }) => {
  const [answer, setanswer] = useState([]);
  const nav = useNavigate();

  console.log(index);
  console.log(answer);

  const [currentidx, setcurrentidx] = useState(index);

  useEffect(() => {
    if (answer.length === 7) {
      nav("/result", { state: { answer: answer } });
    } else {
      console.log("no");
    }
  }, [index, nav]);

  const value = (value) => {
    console.log(index + 1, ":", value);
    setanswer((answer) => [...answer, value]);

    setcurrentidx(index + 1);
  };

  console.log(currentidx, index);

  const cancel = () => {
    setanswer(answer.slice(0, answer.length - 1));
  };

  useEffect(() => {
    if (currentidx !== index) {
      cancel();
    }
  }, [currentidx, index]);
  return (
    <div className="flex flex-col items-center mt-5 " style={{ height: "calc(100vh - 300px)", position: "relative" }}>
      <div className="flex flex-col w-1/2 items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <button
          className="mt-2 bg-blue-500 w-1/2 border rounded-full"
          onClick={() => {
            increindex();
            renderquesion();
            renderimg();
            value(1);
          }}
        >
          1
        </button>
        <button
          className="mt-2 bg-blue-500 w-1/2 border rounded-full"
          onClick={() => {
            increindex();
            renderquesion();
            renderimg();
            value(2);
          }}
        >
          2
        </button>
      </div>
    </div>
  );
};

export default ChoiceButton;
