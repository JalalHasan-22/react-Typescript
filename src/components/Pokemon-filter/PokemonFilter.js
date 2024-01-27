import styled from '@emotion/styled';
import { useContext } from 'react';
import PokemonContext from '../../context/PokemonContext';

const Input = styled.input`
  width: 100%;
  padding: 0.2rem;
  font-size: x-large;
`;
const PokemonFilter = () => {
  const { filter, setFilter } = useContext(PokemonContext);
  return (
    <Input
      type='text'
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
    />
  );
};
export default PokemonFilter;
