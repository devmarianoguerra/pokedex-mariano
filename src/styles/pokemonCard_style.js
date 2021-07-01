import styled from "styled-components";
import { Modal, Card } from "react-bootstrap";

const PokeCard = styled(Card)`
  width: 10rem;
  &:hover {
    border: 1px solid #1df4f4;
    box-shadow: 3px 3px 8px 1px #bfbfbf;
  }
`;

const Header = styled(Modal.Header)`
  display: block;
  padding: 3rem 1rem;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
const TypePill = styled.span`
  font-size: 0.5rem;
  padding: 0.5rem 1rem;
  color: #fff;

  background-color: ${(props) =>
    (props.type === "grass" && "#184309") ||
    (props.type === "poison" && "#994D99") ||
    (props.type === "fire" && "#E44C27") ||
    (props.type === "bug" && "#95A211") ||
    (props.type === "electric" && "#F7B110") ||
    (props.type === "normal" && "#7A7772") ||
    (props.type === "rock" && "#A0873C") ||
    (props.type === "dark" && "#543F30") ||
    (props.type === "fairy" && "#ECAAEC") ||
    (props.type === "flying" && "#8D9FEF") ||
    (props.type === "ground" && "#AE924B") ||
    (props.type === "steel" && "#6A6A6A") ||
    (props.type === "dragon" && "#715CD0") ||
    (props.type === "fighting" && "#2F1514") ||
    (props.type === "ghost" && "#27245E") ||
    (props.type === "ice" && "#6DD3F3") ||
    (props.type === "psychic" && "#E5477E") ||
    (props.type === "water" && "#0090ff")};
  border-radius: 2rem;
  margin: 0 1rem;
  text-transform: uppercase;
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;

const Subtitle = styled.h6`
  position: absolute;
  top: -27px;
  background-color: #fff;
  padding: 0 1rem;
  color: #bfbfbf;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ToogleSwitch = styled.div`
  .switch input {
    display: none;
  }
  .switch {
    display: inline-block;
    width: 60px;
    height: 30px;
    margin: 8px;
    transform: translateY(50%);
    position: relative;
  }

  .slider {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 30px;
    box-shadow: 0 0 0 2px #777, 0 0 4px #777;
    cursor: pointer;
    border: 4px solid transparent;
    overflow: hidden;
    transition: 0.4s;
  }
  .slider:before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background: #777;
    border-radius: 30px;
    transform: translateX(-30px);
    transition: 0.4s;
  }

  input:checked + .slider:before {
    transform: translateX(30px);
    background: #0090ff;
  }
  input:checked + .slider {
    box-shadow: 0 0 0 2px #0090ff, 0 0 2px limeGreen;
  }
`;

export {
  PokeCard,
  Header,
  TitleContainer,
  TypePill,
  TextContainer,
  Subtitle,
  ButtonContainer,
  ToogleSwitch,
};
