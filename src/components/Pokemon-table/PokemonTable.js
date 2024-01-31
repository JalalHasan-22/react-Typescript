import { UseSelector, useDispatch, useSelector } from 'react-redux';
import PokemonRow from '../Pokemon-Row/Pokemon-row';

const PokemonTable = () => {
  const { pokemon, filter } = useSelector((state) => state);
  const dispatch = useDispatch();
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
