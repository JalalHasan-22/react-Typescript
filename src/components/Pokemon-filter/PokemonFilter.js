import styled from '@emotion/styled';

const Input = styled.input`
  width: 100%;
  padding: 0.2rem;
  font-size: x-large;
`;
const PokemonFilter = ({ filter, setFilter }) => {
  return (
    <Input
      type='text'
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
    />
  );
};
export default PokemonFilter;
