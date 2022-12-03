import styled from "@emotion/styled";

export const LevelBadge = styled.span<{ level: number }>`
  width: 28px;
  height: 1.265rem;
  border-radius: 2px;
  background-color: ${({ level }) => {
    switch (level) {
      case 3:
        return "#19c79c";
      case 4:
        return "#12afb4";
      case 5:
        return "#2a89be";
      default:
        return "#085f99";
    }
  }};
  line-height: 1.265rem;
  font-size: 0.8rem;
  padding: 0 0.4rem;
  margin-right: 2px;
  &::before {
    color: white;
    display: flex;
    justify-content: center;
    content: ${({ level }) => `"Lv${level}"`};
  }
`;

export const IndexBadge = styled.span<{ index: number }>`
  width: 28px;
  height: 1.265rem;
  border-radius: 2px;
  background-color: #19c79c;
  line-height: 1.265rem;
  font-size: 0.8rem;
  padding: 0 0.4rem;
  margin-right: 2px;
  &::before {
    color: white;
    display: flex;
    justify-content: center;
    content: ${({ index }) => `"${String(index).padStart(3, "0")}"`};
  }
`;

export const ContentHeader = styled.header`
  display: flex;
  align-items: center;
  flex-direction: row;
  position: relative;
  height: 56px;
  line-height: 56px;
  padding: 0 1rem;
  background-color: #fafafa;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  font-size: 1.15rem;
  font-weight: normal;
`;

export const ContentTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
`;

export const ContentList = styled.ul`
  padding: 0;
  list-style-type: none;
`;

export const ContentItem = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  height: 50px;
  padding: 14px;
  cursor: pointer;
  overflow: hidden;
  border-bottom: 1px solid #e0e0e0;
  p {
    padding: 0;
    margin: 0;
    margin-left: 8px;
  }
`;

export const SelectedTitle = styled.h1`
  margin: 16px;
`;
