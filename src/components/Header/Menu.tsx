import React from "react";
import { MenuItem, StyledMenu } from "./styled";

const Menu = () => {
  return (
    <StyledMenu>
      <MenuItem>
        <a className="active">지후 코스</a>
      </MenuItem>
      <MenuItem>
        <a>에릭 코스</a>
      </MenuItem>
      <MenuItem>
        <a>진저 코스</a>
      </MenuItem>
      <MenuItem>
        <a>비즈니스 코스</a>
      </MenuItem>
      <MenuItem>
        <a>두뇌 표현 코스</a>
      </MenuItem>
      <MenuItem>
        <a>바로 쓰는 패턴 코스</a>
      </MenuItem>
      <MenuItem>
        <a>토픽 수다 코스</a>
      </MenuItem>
    </StyledMenu>
  );
};

export default Menu;
