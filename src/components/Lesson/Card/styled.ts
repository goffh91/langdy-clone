import styled from "@emotion/styled";

export const Wrap = styled.div`
  margin: 0;
  padding: 10px 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border-bottom: 1px solid #e0e0e0;
  line-height: 1.5rem;
`;

export const ThumbContainer = styled.div`
  position: relative;
`;

export const Thumbnail = styled.div`
  width: 110px;
  height: 60px;
  background-color: #bebebe;
`;

export const InfoArea = styled.div`
  div {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  p {
    margin: 0;
    font-size: 0.8rem;
  }
`;
