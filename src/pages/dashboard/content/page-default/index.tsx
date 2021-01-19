import React from "react";
import "./index.less";
import LogoSVG from "@/assets/fishDesign.svg";

export const PageDefault: React.FC = () => {
  return (
    <div className="fishDesgn-annocement">
      <img
        src={LogoSVG}
        style={{
          width: 200,
          height: 200,
          marginBottom: 20,
        }}
      />
      这个库还在写，可以等几个月再来看hh
      <p>
        作者：
        <a
          href="https://github.com/zjufishboy"
          className="link"
        >
          游鱼星
        </a>
      </p>
      欢迎合作
    </div>
  );
};
