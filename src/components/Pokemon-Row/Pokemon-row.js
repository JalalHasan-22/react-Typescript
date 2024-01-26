function PokemonRow({ pokemon, onSelect }) {
  return (
    <tr>
      <td>{pokemon?.name?.english}</td>
      <td>{pokemon?.type.join(', ')}</td>
      <td>
        <button onClick={() => onSelect(pokemon)}>Select</button>
      </td>
    </tr>
  );
}

export default PokemonRow;
