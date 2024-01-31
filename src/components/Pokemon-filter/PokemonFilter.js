import styled from '@emotion/styled';
import { UseSelector, useDispatch, useSelector } from 'react-redux';

const Input = styled.input`
  width: 100%;
  padding: 0.2rem;
  font-size: x-large;
`;
const PokemonFilter = () => {
  const { filter } = useSelector((state) => state);
  const dispatch = useDispatch();
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
