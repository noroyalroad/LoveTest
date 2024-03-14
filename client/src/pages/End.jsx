import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import result from "../assets/images/KakaoTalk_Image_2024-03-13-15-57-22.jpeg";

const End = () => {
  const location = useLocation();
  const { answer } = location.state;
  const nav = useNavigate();

  const answerkey = [1, 1, 1, 2, 1, 2, 1];

  let count = 0;
  let aworng = 0;

  for (let i = 0; i < answer.length; i++) {
    answer[i] === answerkey[i] ? count++ : aworng++;
  }

  let percent = (aworng / 7) * 100;
  percent = 100 - percent;

  return (
    <div className="">
      <div className="bg-pink-500 text-white p-2 font-ygjalnan h-12 text-lg text-center">김현 테스트</div>
      <div className="font-ygjalnan flex flex-row justify-center mt-2">
        끝났습니다 ! 맞춘 갯수 :<p className="text-blue-300 ml-2 mr-2">{count}</p> 틀린 갯수 : <p className="ml-2 text-red-400">{aworng}</p>
      </div>
      <div>당신은 {percent.toFixed(0)} % 알고 있네요 ?</div>
      <img src={result} alt="resultimg"></img>

      <div className=" relative " style={{ height: "calc(100vh - 300px)" }}>
        <button
          className="border border-l-4 border-r-8 border-t-2 border-b-8 h-14 text-lg   border-black bg-yellow-300 w-auto  font-ygjalnan  rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          onClick={() => {
            nav("/");
          }}
        >
          테스트 다시하기 🔄
          {/* <IoReload /> */}
        </button>
        <button>틀린 문제 보기</button>
      </div>
    </div>
  );
};

export default End;
