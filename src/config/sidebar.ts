export interface ComponentAttribute{
    value:string;   //唯一标示ID，用英文小写
    name:string;    // 英文名
    subname:string; // 附属信息
}
export const components:ComponentAttribute[]=[
    {value:"button",name:"Button",  subname:"按钮",},
    {value:"icon",  name:"Icon",    subname:"图标",},
    {value:"typography",name:"Typography",subname:"排版"}
]