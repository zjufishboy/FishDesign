import React from 'react';
import './index.less';

interface fishLayoutSideProps{
    children:React.ReactNode;
}

export const Sidebar:React.FC<fishLayoutSideProps>=(props:fishLayoutSideProps)=>{
    const { children } = props;
    return (
        <div className="fish-layout-sidebar">
            {children}
        </div>
    );
}