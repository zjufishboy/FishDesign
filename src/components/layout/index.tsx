import React from "react";
import "./index.less";
import { Sidebar } from "./component/sidebar";
import { Content } from "./component/content";

interface LayoutProps {
  sidebar?: React.ReactNode;
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = (
  props: LayoutProps
) => {
  const { children, sidebar } = props;
  return (
    <div className="fish-layout">
      {sidebar && <Sidebar>{sidebar}</Sidebar>}
      <Content>{children}</Content>
    </div>
  );
};
