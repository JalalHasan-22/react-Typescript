function PokemonRow({ pokemon }) {
  return (
    <tr>
      <td>{pokemon?.name?.english}</td>
      <td>{pokemon?.type.join(', ')}</td>
    </tr>
  );
}

export default PokemonRow;
