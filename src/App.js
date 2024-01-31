import { useEffect, useReducer } from 'react';
import './App.css';
import PokemonInfo from './components/Pokemon-Info/PokemonInfo';
import styled from '@emotion/styled';
import PokemonFilter from './components/Pokemon-filter/PokemonFilter';
import PokemonTable from './components/Pokemon-table/PokemonTable';
import { createStore } from 'redux';
import { Provider, useDispatch, useSelector } from 'react-redux';

const Title = styled.h1`
  text-align: center;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
  grid-gap: 1rem;
`;

const pokemonReducer = (
  state = {
    pokemon: [],
    filter: '',
    selectedItem: null,
  },
  action,
) => {
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
      return state;
  }
};

const store = createStore(pokemonReducer);

function App() {
  const { pokemon } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('http://localhost:3000/REACT-TYPESCRIPT/pokemon.json')
      .then((promise) => promise.json())
      .then((result) => dispatch({ type: 'SET_POKEMON', payload: result }));
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
      <PokemonFilter />
      <Container>
        <PokemonTable />
        <PokemonInfo />
      </Container>
    </div>
  );
}

const app = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default app;
