import styled from "styled-components";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

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

const Footer = (props) => {
  const { handlePaginationLeft, handlePaginationRight, activePage } = props;
  return (
    <div>
      <PaginationWrapper>
        <PagButton onClick={() => handlePaginationLeft(activePage - 1)}>
          <BsChevronCompactLeft />
        </PagButton>

        <PagButton onClick={() => handlePaginationRight(activePage + 1)}>
          <BsChevronCompactRight />
        </PagButton>
      </PaginationWrapper>
    </div>
  );
};

export default Footer;
