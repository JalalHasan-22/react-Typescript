import { useState } from 'react';
import './App.css';
import PokemonRow from './components/Pokemon-Row/Pokemon-row';
import Pokemon from './pokemon.json';
import PokemonInfo from './components/Pokemon-Info/PokemonInfo';

function App() {
  const [filter, setFilter] = useState('');
  const [selectedItem, setSelectedItem] = useState('');
  return (
    <div
      style={{
        margin: 'auto',
        width: 800,
        paddingTop: '1rem',
      }}
    >
      <h1 className='title'>Pokemon Search</h1>
      <input
        type='text'
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '70% 30%',
          gridGap: '1rem',
        }}
      >
        <table width='100%'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {Pokemon.filter((pokemon) =>
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
        {selectedItem && <PokemonInfo {...selectedItem} />}
      </div>
    </div>
  );
}

export default App;
