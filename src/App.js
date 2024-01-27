import { useEffect, useState } from 'react';
import './App.css';
import PokemonRow from './components/Pokemon-Row/Pokemon-row';
import PokemonInfo from './components/Pokemon-Info/PokemonInfo';
import styled from '@emotion/styled';

const Title = styled.h1`
  text-align: center;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
  grid-gap: 1rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.2rem;
  font-size: x-large;
`;
function App() {
  const [filter, setFilter] = useState('');
  const [selectedItem, setSelectedItem] = useState('');
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/REACT-TYPESCRIPT/pokemon.json')
      .then((promise) => promise.json())
      .then((result) => setPokemon(result));
  }, []);

  return (
    <div
      style={{
        margin: 'auto',
        width: 800,
        paddingTop: '1rem',
      }}
    >
      <Title>Pokemon Search</Title>
      <Input
        type='text'
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <Container>
        <table width='100%'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {pokemon
              .filter((pokemon) =>
                pokemon.name.english
                  .toLocaleLowerCase()
                  .includes(filter.toLocaleLowerCase()),
              )
              .slice(0, 20)
              .map((pokemon) => {
                return (
                  <PokemonRow
                    pokemon={pokemon}
                    key={pokemon?.id}
                    onSelect={(pokemon) => setSelectedItem(pokemon)}
                  />
                );
              })}
          </tbody>
        </table>
        {selectedItem && <PokemonInfo {...selectedItem} />}
      </Container>
    </div>
  );
}

export default App;
