import React, { useState } from "react";
import i1 from "../../assets/images/q1.jpeg";
import i2 from "../../assets/images/q2.webp";
import i3 from "../../assets/images/q3.jpeg";
import i4 from "../../assets/images/q4.jpeg";
import i5 from "../../assets/images/q5.png";
import i6 from "../../assets/images/q6.png";
import i7 from "../../assets/images/q7.png";
import i8 from "../../assets/images/q8.png";
import i9 from "../../assets/images/q9.png";
import i10 from "../../assets/images/q10.png";
import i11 from "../../assets/images/q11.png";
import i12 from "../../assets/images/q12.png";
import i13 from "../../assets/images/q13.png";
import i14 from "../../assets/images/q14.png";
import ChoiceButton from "./ChoiceButton";
import Progressbar from "./Progressbar";
const Twoimage = ({ increindex, indexs }) => {
  const img = [i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12, i13, i14];

  const question = [
    "내가 둘 중 더 좋아하는 건 뭘까요 ~~  ?",
    "내가 둘 중 더 싫어하는 건 ? ",
    "첫 키스 장소는 ? ",
    "내가 요즘 공부 할 때 뭘 더 들을까 ?  ",
    "내가 준비하고 있는 직업은 ?",
    "자신은 어떤 게 더 좋은지 ?  ",
    "벨런스 게임 ",
  ];

  const imgMap = {
    첫: [i1, i2],
    둘: [i3, i4],
    셋: [i5, i6],
    넷: [i7, i8],
    다섯: [i9, i10],
    육: [i11, i11],
    일곱: [i11, i11],
  };

  console.log(imgMap["첫"]);

  const [ques, setques] = useState(question[0]);

  const [imgindex, setimgindex] = useState({
    index1: 0,
    index2: 1,
  });

  const [quesindex, setquesindex] = useState(0);

  const changeimg = () => {
    setimgindex((imgindex) => ({
      index1: imgindex.index1 + 2,
      index2: imgindex.index2 + 2,
    }));
  };

  const changeindex = () => {
    setimgindex((imgindex) => ({
      index1: (imgindex.index1 - 2) % img.length,
      index2: (imgindex.index2 - 2) % img.length,
    }));
  };

  const incrementIndex = () => {
    setquesindex((prevIndex) => (prevIndex + 1) % question.length);
  };

  const decrementIndex = () => {
    setquesindex((prevIndex) => (prevIndex - 1) % question.length);
  };

  const renderquestion = () => {
    setques(question[(quesindex + 1) % question.length]);
  };

  const derenderquestion = () => {
    setques(question[(quesindex - 1) % question.length]);
  };

  console.log(ques);
  return (
    <div>
      <Progressbar question={ques} Questionarray={question} index={quesindex} changeindex={changeindex} derenderQuestion={derenderquestion} decindex={decrementIndex} />
      <div className="flex w-1/2 mt-16">
        <img src={img[imgindex.index1]} alt="img1"></img>
        <img src={img[imgindex.index2]} alt="img2"></img>
      </div>

      <div className="font-NPSfontBold text-lg mt-5">{ques}</div>

      <ChoiceButton increindex={incrementIndex} renderquesion={renderquestion} renderimg={changeimg} index={quesindex} />
    </div>
  );
};

export default Twoimage;
