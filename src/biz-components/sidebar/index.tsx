import React from "react";
import "./index.less";
import LogoSVG from "@/assets/fishDesign.svg";
import {
  components,
  ComponentAttribute,
} from "@/config/sidebar";
import { FishSideBarItem } from "./sidebar-item";
import { useParams } from "react-router-dom";

export const FishSideBar: React.FC = () => {
  const {name} = useParams<{name:string}>();
  const renderSideBarItem = (
    item: ComponentAttribute,
    index: number
  ) => {
    const isSelected =
      name === item.value;
    return (
      <FishSideBarItem
        key={`sidebar-${item.name}-${index}`}
        name={item.name}
        subname={item.subname}
        isSelected={isSelected}
        to={`/components/${item.value}`}
      />
    );
  };
  return (
    <>
      <div className="fishDesign-sidebar-logo-container">
      <div className="fishDesign-sidebar-logo">
        <img
          src={LogoSVG}
          className="fishDesign-sidebar-logo-icon"
        />
        Fish Design
      </div>
      </div>
      {components.map(
        renderSideBarItem
      )}
    </>
  );
};
