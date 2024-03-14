import React from "react";
import LadingImage from "../componets/LadingImage";
import Ladingcomment from "../componets/Ladingcomment";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const nav = useNavigate();
  const onClikc = () => {
    nav("/quiz");
  };
  return (
    <div>
      <LadingImage />
      <Ladingcomment />

      <button className="border-l-4 border-r-8 border-t-2 border-b-8  border-black rounded-full w-1/2 h-20 text-3xl mt-5 bg-pink-500 text-white font-ygjalnan" onClick={onClikc}>
        테스트 시작!
      </button>
    </div>
  );
};

export default LandingPage;
