import { useContext } from 'react';
import PokemonRow from '../Pokemon-Row/Pokemon-row';
import PokemonContext from '../../context/PokemonContext';

const PokemonTable = () => {
  const { pokemon, filter, setSelectedItem } = useContext(PokemonContext);
  return (
    <table width='100%'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        {pokemon
          .filter((pokemon) =>
            pokemon.name.english
              .toLocaleLowerCase()
              .includes(filter.toLocaleLowerCase()),
          )
          .slice(0, 20)
          .map((pokemon) => {
            return (
              <PokemonRow
                pokemon={pokemon}
                key={pokemon?.id}
                onSelect={(pokemon) => setSelectedItem(pokemon)}
              />
            );
          })}
      </tbody>
    </table>
  );
};

export default PokemonTable;
