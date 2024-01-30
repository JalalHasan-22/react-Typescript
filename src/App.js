import { useEffect, useReducer, useState } from 'react';
import './App.css';
import PokemonInfo from './components/Pokemon-Info/PokemonInfo';
import styled from '@emotion/styled';
import PokemonFilter from './components/Pokemon-filter/PokemonFilter';
import PokemonTable from './components/Pokemon-table/PokemonTable';
import PokemonContext from './context/PokemonContext';
const Title = styled.h1`
  text-align: center;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
  grid-gap: 1rem;
`;

const pokemonReducer = (state, action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return {
        ...state,
        filter: action.payload,
      };
    case 'SET_POKEMON':
      return {
        ...state,
        pokemon: action.payload,
      };
    case 'SET_SELECTED_POKEMON':
      return {
        ...state,
        selectedItem: action.payload,
      };
    default:
      throw new Error();
  }
};
function App() {
  const [filter, setFilter] = useState('');
  const [selectedItem, setSelectedItem] = useState('');
  const [pokemon, setPokemon] = useState([]);
  const [state, dispatch] = useReducer(pokemonReducer, {
    filter: '',
    pokemon: [],
    selectedItem: null,
  });

  useEffect(() => {
    fetch('http://localhost:3000/REACT-TYPESCRIPT/pokemon.json')
      .then((promise) => promise.json())
      .then((result) => dispatch({ type: 'SET_POKEMON', payload: result }));
  }, []);

  return (
    <PokemonContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      <div
        style={{
          margin: 'auto',
          width: 800,
          paddingTop: '1rem',
        }}
      >
        <Title>Pokemon Search</Title>
        <PokemonFilter />
        <Container>
          <PokemonTable />
          <PokemonInfo />
        </Container>
      </div>
    </PokemonContext.Provider>
  );
}

export default App;
