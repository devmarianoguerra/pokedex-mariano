import { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import { Spinner } from "react-bootstrap";
import { InputGroup, FormControl } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";
import Footer from "./Footer";
import { InputContainer, PokemonContainer } from "../styles/pokemonGrid_style";

const PokemonGrid = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");
  const [offset, setOffset] = useState(18);
  const [limit, setLimit] = useState(18);
  const [activePage, setActivePage] = useState(1);

  const getPokemons = async (url) => {
    try {
      let res = await fetch(url);
      let pokemonsData = await res.json();
      setPokemons(pokemonsData.results);
    } catch (error) {
      console.error("ERROR:", error);
    }
  };

  useEffect(() => {
    setLoading(true);
    let url = `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=${limit}`;
    getPokemons(url);
    setLoading(false);
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  const handleKeyDown = (e) => {
    setInput("");
  };

  const handlePaginationRight = (selectedPage) => {
    setActivePage(selectedPage);
    let nextOffset = selectedPage * limit;

    console.log(offset);
    if (offset < -1) {
      let url = `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=${limit}`;
      getPokemons(url);
    } else {
      let url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;
      getPokemons(url);
    }
    setOffset(nextOffset);
    setActivePage(selectedPage);
  };

  const handlePaginationLeft = (selectedPage) => {
    let prevOffset = offset - limit * 2;
    setOffset(prevOffset - limit);
    console.log(`OFFSET: ${offset} - ${limit} = ${prevOffset}`);
    if (offset < 18) {
      let url = `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=${limit}`;
      getPokemons(url);
    } else {
      let url = `https://pokeapi.co/api/v2/pokemon/?offset=${prevOffset}&limit=${limit}`;
      getPokemons(url);
    }
    setActivePage(selectedPage);
  };

  let filtered = pokemons.filter((item) => {
    return item.name.indexOf(input) !== -1;
  });

  return (
    <div>
      <InputContainer>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text
              id="basic-addon1"
              style={{ backgroundColor: "white" }}
            >
              <AiOutlineSearch />
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            placeholder="Search by keywords..."
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
        </InputGroup>
      </InputContainer>

      {loading ? (
        <Spinner animation="border" variant="warning" />
      ) : (
        <PokemonContainer>
          {pokemons.length !== 0 &&
            filtered.map((item, index) => (
              <PokemonCard key={index} name={item.name} url={item.url} />
            ))}
        </PokemonContainer>
      )}
      <Footer
        handlePaginationRight={handlePaginationRight}
        handlePaginationLeft={handlePaginationLeft}
        activePage={activePage}
      />
    </div>
  );
};

export default PokemonGrid;
