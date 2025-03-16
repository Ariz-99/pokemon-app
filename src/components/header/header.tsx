import React from "react";
import ultraball from "../../assets/ultra-ball.png";

const Header: React.FC = () => {
  return (
    <div className="fixed top-0 w-full flex flex-row justify-center p-1 bg-gray-500">
      <img
        src={ultraball}
        alt="Ultra Ball"
        className="max-w-[45px] max-h-[45px]"
      />
    </div>
  );
};
export default Header;
