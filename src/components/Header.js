import styled from "styled-components";

const PokeLogo = styled.img`
  margin: 1rem 0;
`;

const Header = () => {
  return (
    <>
      <PokeLogo
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/538px-International_Pok%C3%A9mon_logo.svg.png"
        alt=""
      />
    </>
  );
};

export default Header;
