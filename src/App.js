import { useEffect, useState } from 'react';
import './App.css';
import PokemonInfo from './components/Pokemon-Info/PokemonInfo';
import styled from '@emotion/styled';
import PokemonFilter from './components/Pokemon-filter/PokemonFilter';
import PokemonTable from './components/Pokemon-table/PokemonTable';

const Title = styled.h1`
  text-align: center;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
  grid-gap: 1rem;
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
      <PokemonFilter filter={filter} setFilter={setFilter} />
      <Container>
        <PokemonTable
          pokemon={pokemon}
          filter={filter}
          setSelectedItem={setSelectedItem}
        />
        {selectedItem && <PokemonInfo {...selectedItem} />}
      </Container>
    </div>
  );
}

export default App;
