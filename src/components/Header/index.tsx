import React from "react";
import { MenuOutlined } from "@ant-design/icons";
import { StyledHeader, Title } from "./styled";

const Header = () => {
  return (
    <>
      <StyledHeader>
        <MenuOutlined style={{ padding: "0 18px" }} />
        <Title>컨텐츠 선택</Title>
      </StyledHeader>
    </>
  );
};

export default Header;
