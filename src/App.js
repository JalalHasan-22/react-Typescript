import './App.css';
import PokemonRow from './components/Pokemon-Row/Pokemon-row';
import Pokemon from './pokemon.json';

function App() {
  return (
    <div
      style={{
        margin: 'auto',
        width: 800,
        paddingTop: '1rem',
      }}
    >
      <h1 className='title'>Pokemon Search</h1>
      <table width='100%'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {Pokemon.slice(0, 20).map((pokemon) => {
            return <PokemonRow pokemon={pokemon} key={pokemon?.id} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
