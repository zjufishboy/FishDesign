import React from "react";
import "./index.less";
import { Layout } from "@/components/layout";
import { FishSideBar } from "@/biz-components/sidebar";
import LogoSVG from "@/assets/fishDesign.svg";

export const Dashboard: React.FC = () => {
  return (
    <Layout sidebar={<FishSideBar/>} >
      <div className="fishDesign-content">
        <div className="fishDesgn-annocement">
        <img
          src={LogoSVG}
          style={{width:200,height:200,marginBottom:20}}
        />
          这个库还在写，可以等几个月再来看hh
          <p>
            作者：<a href="https://github.com/zjufishboy" className="link">游鱼星</a>
          </p>

          欢迎合作
        </div>
      </div>
    </Layout>

  );
};
