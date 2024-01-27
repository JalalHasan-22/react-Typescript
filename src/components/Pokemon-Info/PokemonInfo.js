import { useContext } from 'react';
import PokemonContext from '../../context/PokemonContext';

const PokemonInfo = () => {
  const { selectedItem } = useContext(PokemonContext);
  return selectedItem ? (
    <div>
      <h1>{selectedItem.name.english}</h1>
      <table>
        <tbody>
          {Object.keys(selectedItem.base).map((key) => {
            return (
              <tr key={key}>
                <td>{key}</td>
                <td>{selectedItem.base[key]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  ) : null;
};
export default PokemonInfo;
