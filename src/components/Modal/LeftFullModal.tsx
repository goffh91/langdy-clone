import React from "react";
import styled from "@emotion/styled";
import * as animation from "../../styles/animation";

type Props = {
  show: boolean;
  children: React.ReactNode;
};

const LeftFullModal = (props: Props) => {
  const { show, children } = props;
  return <Wrap show={show}>{children}</Wrap>;
};

export const Wrap = styled.div<{ show: boolean }>`
  ${animation.edgeEaseInOut()}
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  background-color: #ffffff;
  ${({ show }) =>
    show ? animation.RightDrawerShow() : animation.RightDrawerHide()};
`;

export default LeftFullModal;
