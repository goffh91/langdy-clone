import styled from "@emotion/styled";
import { Button } from "antd";

export const EmptyList = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SelectedList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const SelectedLesson = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  position: relative;
  overflow: hidden;
  padding: 14px;
  line-height: 1.5rem;
  border-bottom: 1px solid #e0e0e0;
  &:first-of-type {
    border-top: 1px solid #e0e0e0;
  }
  p {
    margin: 0;
    margin-left: 4px;
  }
`;

export const RemoveButton = styled(Button)`
  position: absolute;
  color: #bdbdbd;
  top: 10px;
  right: 10px;
`;

export const HeadSection = styled.section`
  width: 100%;
  font-size: 1.5em;
  margin-bottom: 10px;
  span {
    margin-right: 8px;
  }
`;

export const BodySection = styled.section`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
`;
