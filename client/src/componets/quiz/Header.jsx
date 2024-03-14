import { useState } from "react";
import { MdNavigateBefore } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const Header = ({ index, length, decreindex, derenderingquestion, decimg }) => {
  const nav = useNavigate();

  const onClikc = () => {
    if (index === 0) {
      nav("/");
    } else {
      decreindex();
      derenderingquestion();
      decimg();
    }
  };

  return (
    <div className="  flex flex-row justify-between mt-4 ">
      <div className="flex flex-row">
        <MdNavigateBefore size="40" />
        <p
          className="text-xl mt-1"
          onClick={() => {
            onClikc();
          }}
        >
          뒤로
        </p>
      </div>

      <div className="text-pink-500  text-lg font-ygjalnan">김현 테스트</div>
      <div className="text-2xl font-thin">
        {index + 1}/{length}
      </div>
    </div>
  );
};

export default Header;
