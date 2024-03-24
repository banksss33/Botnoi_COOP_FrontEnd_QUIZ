import { useState, useEffect } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

interface PokemonSprites {
  front_default: string;
  back_default: string;
}

interface PokemonStat {
  base_stat: number;
}

interface PokemonType {
  slot: number;
  type: {
    name: string;
  };
}

interface Pokemon {
  id: number;
  name: string;
  sprites: PokemonSprites;
  stats: PokemonStat[];
  types: PokemonType[];
  cries: {
    latest: string;
    legacy: string;
  };
}

interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: {
    name: string;
    url: string;
  }[];
}

function Q2() {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

  useEffect(() => {
    const fetchPokemonList = async () => {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?offset=0&limit=151"
        );
        const data: PokemonListResponse = await response.json();

        const pokemonPromises = data.results.map(async (result) => {
          const response = await fetch(result.url);
          const pokemonData: Pokemon = await response.json();
          return pokemonData;
        });

        const pokemonData = await Promise.all(pokemonPromises);
        setPokemonList(pokemonData);
      } catch (error) {
        console.error("Error fetching Pokemon list:", error);
      }
    };

    fetchPokemonList();
  }, []);

  return (
    <body className="bg-secondary">
      <Container fluid className="w-100 ">
        <Row>
          {pokemonList.map((pokemon) => (
            <Col key={pokemon.id} xs={12} sm={6} md={4} lg={3}>
              <Card className="mb-4 h-100">
                <Card.Title className="text-center mt-3 bg-light">
                  {pokemon.name.toUpperCase()}
                </Card.Title>
                <Container className="w-75" style={{ borderStyle: "solid" }}>
                  <img className="w-50" src={pokemon.sprites.front_default} />
                  <img className="w-50" src={pokemon.sprites.back_default} />
                </Container>
                <Card.Body className="bg-light">
                  <div className="mb-1 d-flex justify-content-center">
                    <audio controls className="w-75">
                      <source src={pokemon.cries.latest} type="audio/ogg" />
                    </audio>
                  </div>
                  <Card.Text>
                    <h3>Type(s):</h3>
                    <ul>
                      {pokemon.types.map((type) => (
                        <li key={type.slot}>{type.type.name}</li>
                      ))}
                    </ul>
                    <h3>Stats:</h3>
                    <ul>
                      <li>HP: {pokemon.stats[0].base_stat}</li>
                      <li>Attack: {pokemon.stats[1].base_stat}</li>
                      <li>Defense: {pokemon.stats[2].base_stat}</li>
                      <li>Special-Attack: {pokemon.stats[3].base_stat}</li>
                      <li>Special-Defense: {pokemon.stats[4].base_stat}</li>
                      <li>Speed: {pokemon.stats[5].base_stat}</li>
                    </ul>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </body>
  );
}

export default Q2;
