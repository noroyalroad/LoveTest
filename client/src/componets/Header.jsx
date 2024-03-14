import React from "react";
import { MdNavigateBefore } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
const Header = () => {
  const path = useLocation();
  const nav = useNavigate();

  console.log(path.pathname);
  return (
    <div className="flex   border-pink-500 border-b-4 mt-4">
      {path.pathname === "/quiz" || "/result" ? (
        <MdNavigateBefore
          size="35"
          onClick={() => {
            nav("/");
          }}
        />
      ) : (
        ""
      )}
      <div className="text-black text-lg mx-auto font-SDSamliphopangche_Outline mb-2">
        <p className="text-center">김현연구소</p>
      </div>
    </div>
  );
};

export default Header;
{
  /* <MdNavigateBefore size="40" /> */
}
