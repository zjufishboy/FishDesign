import React from "react";
import { useHistory } from "react-router-dom";
import "./index.less";

interface FishSideBarItemProps {
  name: string;
  subname?: string;
  isSelected?: boolean;
  to: string;
}

export const FishSideBarItem: React.FC<FishSideBarItemProps> = (
  props: FishSideBarItemProps
) => {
  
  const { name, subname,isSelected, to } = props;
  const history = useHistory();
  const cx=()=>{
    const cxlist=['fishDesign-sidebar-item']
    isSelected && cxlist.push('fishDesign-sidebar-item-selected')
    return cxlist.join(" ");
  }
  const handleJump =()=>{
    history.push(to);
  }
  return (
    <>
      <div className={cx()} onClick={handleJump}>
        <span className="fishDesign-sidebar-item-name">
          {name}
        </span>
        <span className="fishDesign-sidebar-item-subname">
          {subname}
        </span>
      </div>
    </>
  );
};
