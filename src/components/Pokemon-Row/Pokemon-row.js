import Button from '@mui/material/Button';

function PokemonRow({ pokemon, onSelect }) {
  return (
    <tr>
      <td>{pokemon?.name?.english}</td>
      <td>{pokemon?.type.join(', ')}</td>
      <td>
        <Button
          variant='contained'
          color='primary'
          onClick={() => onSelect(pokemon)}
        >
          Select
        </Button>
      </td>
    </tr>
  );
}

export default PokemonRow;
