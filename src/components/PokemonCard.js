import { useState, useEffect } from "react";
import { Card, Modal } from "react-bootstrap";
import StatsChart from "../components/StatsChart";
import RadarStats from "../components/RadarChart";
import {
  PokeCard,
  Header,
  TitleContainer,
  TypePill,
  TextContainer,
  Subtitle,
  ButtonContainer,
  ToogleSwitch,
} from "../styles/pokemonCard_style";

const PokemonCard = ({ name, url }) => {
  const [pokemonInfo, setPokemonInfo] = useState(null);
  const [show, setShow] = useState(false);
  const [showRadar, setShowRadar] = useState(false);

  useEffect(() => {
    const getPokemonInfo = async () => {
      let res = await fetch(url);
      const pokemonDetails = await res.json();
      let type = pokemonDetails.types.map((type) => type.type);
      let statName = pokemonDetails.stats.map((stat) => stat.stat.name);
      let statValue = pokemonDetails.stats.map((stat) => stat.base_stat);
      let pokemonInfo = {
        id: pokemonDetails.id,
        img: pokemonDetails.sprites.front_default,
        height: pokemonDetails.height,
        weight: pokemonDetails.weight,
        types: type,
        stats: {
          name: statName,
          stats: statValue,
        },
      };
      setPokemonInfo(pokemonInfo);
    };

    getPokemonInfo();
  }, [pokemonInfo]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChart = () => {
    setShowRadar(!showRadar);
  };

  if (!pokemonInfo) return null;

  return (
    <>
      <PokeCard onClick={handleShow}>
        <Card.Img variant="top" src={pokemonInfo.img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{`#${pokemonInfo.id}`}</Card.Text>
        </Card.Body>
      </PokeCard>

      <Modal
        show={show}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Header closeButton>
          <Modal.Title>
            <TitleContainer>
              <img src={pokemonInfo.img} alt="" />
              <div>
                <h6>#{pokemonInfo.id}</h6>
                <h5>
                  <strong>
                    {name.charAt(0).toUpperCase() + name.slice(1)}
                  </strong>
                </h5>
                {pokemonInfo.types.map((type, index) => (
                  <TypePill key={index} type={type.name}>
                    {type.name}
                  </TypePill>
                ))}
              </div>
              <div>
                <h6>
                  <strong>Height: </strong>
                  {pokemonInfo.height}
                </h6>
                <h6>
                  <strong>Weight: </strong>
                  {pokemonInfo.weight}
                </h6>
              </div>
            </TitleContainer>
          </Modal.Title>
        </Header>
        <Modal.Body>
          <TextContainer>
            <Subtitle>STATISTICS</Subtitle>
          </TextContainer>
          {showRadar ? (
            <RadarStats stats={pokemonInfo.stats} />
          ) : (
            <StatsChart stats={pokemonInfo.stats} />
          )}
          <ButtonContainer>
            <ToogleSwitch>
              Chart view
              <label className="switch">
                <input type="checkbox" />
                <span className="slider" onClick={handleChart}></span>
              </label>
            </ToogleSwitch>
          </ButtonContainer>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default PokemonCard;
