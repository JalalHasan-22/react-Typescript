const PokemonInfo = ({ name, base }) => {
  return (
    <div>
      <h1>{name.english}</h1>
      <table>
        <tbody>
          {Object.keys(base).map((key) => {
            return (
              <tr key={key}>
                <td>{key}</td>
                <td>{base[key]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default PokemonInfo;
