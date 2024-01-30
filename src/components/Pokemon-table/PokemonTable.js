import { useContext } from 'react';
import PokemonRow from '../Pokemon-Row/Pokemon-row';
import PokemonContext from '../../context/PokemonContext';

const PokemonTable = () => {
  const {
    state: { pokemon, filter },
    dispatch,
  } = useContext(PokemonContext);
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
                onSelect={(pokemon) =>
                  dispatch({ type: 'SET_SELECTED_POKEMON', payload: pokemon })
                }
              />
            );
          })}
      </tbody>
    </table>
  );
};

export default PokemonTable;
