import styled from '@emotion/styled';
import { useContext } from 'react';
import PokemonContext from '../../context/PokemonContext';

const Input = styled.input`
  width: 100%;
  padding: 0.2rem;
  font-size: x-large;
`;
const PokemonFilter = () => {
  const {
    state: { filter },
    dispatch,
  } = useContext(PokemonContext);
  return (
    <Input
      type='text'
      value={filter}
      onChange={(e) =>
        dispatch({ type: 'SET_FILTER', payload: e.target.value })
      }
    />
  );
};
export default PokemonFilter;
