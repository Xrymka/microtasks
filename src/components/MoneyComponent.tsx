import { Button } from "./Button";

export type FilterTypeProps = 'all' | 'dollar' | 'ruble'

type MoneyPropsType = {
  banknote: string;
  nominal: number;
  number: string;
};

type MoneyComponentPropsType = {
  currentMoney: Array<MoneyPropsType>;
  onClickFilterHandler: (nameButton: FilterTypeProps) => void;
};

export const MoneyComponent = (props: MoneyComponentPropsType) => {
  return (
    <div>
      <ul>
        {props.currentMoney.map((objFromMoneyArr, index) => {
          return (
            <li key={index}>
              <span>{objFromMoneyArr.banknote}</span>
              <span>{objFromMoneyArr.nominal}</span>
              <span>{objFromMoneyArr.number}</span>
            </li>
          );
        })}
      </ul>
      <Button name={"All"} callback={() => props.onClickFilterHandler("all")} />
      <Button name={"Ruble"} callback={() => props.onClickFilterHandler("ruble")} />
      <Button name={"Dollar"} callback={() => props.onClickFilterHandler("dollar")} />
    </div>
  );
};
