import styled from "styled-components";

const PaginationWrapper = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PagButton = styled.button`
  width: 30px;
  height: 30px;
  border: 1px solid red;
  border-radius: 30px;
  margin: 0 1rem;
  cursor: pointer;
`;

export { PaginationWrapper, PagButton };
