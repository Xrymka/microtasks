type ListCarsPropsType = {
  cars: Array<CarPropsType>;
};
type CarPropsType = {
  manufacturer: string;
  model: string;
};

export const ListCars = ({ cars }: ListCarsPropsType) => {
  return (
    <table>
      <tr>
        <th>Manufacturer</th>
        <th>Model</th>
      </tr>
      {cars.map((car, index) => {
        return (
          <tr key={index+1}>
            <td>{car.manufacturer}</td>
            <td>{car.model}</td>
          </tr>
        );
      })}
    </table>
  );
};
