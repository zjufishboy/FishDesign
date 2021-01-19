import { Button } from "@/components/button";
import React from "react";

export const PageButton: React.FC = () => {
  return (
    <>
      <h2>Button 按钮</h2>
      <p>
        主要用在你想给用户点击的地方
      </p>
      <Button>一个简单的按钮</Button>
    </>
  );
};
