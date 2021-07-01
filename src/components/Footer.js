import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { PaginationWrapper, PagButton } from "../styles/footer_style";

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
