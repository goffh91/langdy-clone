import React from "react";
import Header from "../Header";
import { Wrap } from "./styled";

const MobileLayout: React.FC<{ children: React.ReactNode }> = (props) => {
  return (
    <Wrap>
      <Header />
      {props.children}
    </Wrap>
  );
};

export default MobileLayout;
