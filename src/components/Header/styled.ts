import styled from "@emotion/styled";

export const StyledHeader = styled.nav`
  padding: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  background-color: white;
  border-bottom: 1px solid #e0e0e0;
  position: relative;
  overflow-x: auto;
  overflow-y: hidden;
`;

export const Title = styled.div``;

export const StyledMenu = styled.ul`
  margin: 0;
  padding: 0;
  height: 48px;
  display: flex;
  flex-wrap: nowrap;
  list-style-type: none;
  align-items: center;
  font-size: 1rem;
  white-space: nowrap;
`;

export const MenuItem = styled.li`
  display: inline-block;
  text-align: center;
  text-transform: none;
  line-height: 48px;
  height: 48px;
  padding: 0;
  margin: 0;
  a {
    color: #9e9e9e;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: color 0.28s ease, background-color 0.28s ease;
    padding: 0 12px;

    &.active {
      color: #424a58;
    }
  }
`;
