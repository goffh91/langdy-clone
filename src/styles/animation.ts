import { css } from "@emotion/react";

export const edgeEaseInOut = () => css`
  transition: top 0.3s ease-in-out, bottom 0.3s ease-in-out,
    left 0.3s ease-in-out, right 0.3s ease-in-out;
`;

export const LeftDrawerShow = () => css`
  left: 0;
  box-shadow: -1px 0 10px 0 rgb(50, 50, 50, 70%);
`;
export const LeftDrawerHide = (width: string = "100%") => css`
  left: -${width};
`;

export const RightDrawerShow = () => css`
  right: 0;
  box-shadow: -1px 0 10px 0 rgb(50, 50, 50, 70%);
`;
export const RightDrawerHide = (width: string = "100%") => css`
  right: -${width};
`;
