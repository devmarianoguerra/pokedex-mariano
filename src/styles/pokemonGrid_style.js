import styled from "styled-components";

const InputContainer = styled.div`
  margin: 2rem 30rem;
`;

const PokemonContainer = styled.section`
  height: 100%;
  padding: 5rem;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1rem;
`;

export { InputContainer, PokemonContainer };
