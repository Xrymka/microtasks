import { MouseEvent, useState } from "react";
import { NewComponent } from "./components/NewComponent";
import { ListCars } from "./components/ListCars";
import { Button } from "./components/Button";
import {
  MoneyComponent,
  type FilterTypeProps,
} from "./components/MoneyComponent";
import { FullInput } from "./components/FullInput";
import { Input } from "./components/Input";

function App() {
  // let a = 1;
  let [a, setA] = useState(1);

  const [students, setStudents] = useState([
    { id: 1, name: "James", age: 8 },
    { id: 2, name: "Robert", age: 18 },
    { id: 3, name: "John", age: 28 },
    { id: 4, name: "Michael", age: 38 },
    { id: 5, name: "William", age: 48 },
    { id: 6, name: "David", age: 58 },
    { id: 7, name: "Richard", age: 68 },
    { id: 8, name: "Joseph", age: 78 },
    { id: 9, name: "Thomas", age: 88 },
    { id: 10, name: "Charles", age: 98 },
    { id: 11, name: "Christopher", age: 100 },
  ]);

  const topCars = [
    { manufacturer: "BMW", model: "X5" },
    { manufacturer: "Mersedes", model: "MLS" },
    { manufacturer: "Audi", model: "Q7" },
  ];

  const MyFirstSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
    console.log("Hello, Im Kate!");
  };

  const ConsoleButton = () => {
    console.log("Hello, it is easy");
  };

  const onClickHandler = (name: string) => {
    setA(++a);
    console.log("Hello, " + name + a);
  };

  const buttonFoo = (call: string, age: number) => {
    console.log("Hello, " + call + ". I'm " + age + " years old");
  };

  const [money, setMoney] = useState([
    { banknote: "dollar", nominal: 100, number: "a123456789" },
    { banknote: "dollar", nominal: 50, number: "b123456789" },
    { banknote: "ruble", nominal: 100, number: "c123456789" },
    { banknote: "dollar", nominal: 100, number: "d123456789" },
    { banknote: "dollar", nominal: 50, number: "e123456789" },
    { banknote: "ruble", nominal: 100, number: "f123456789" },
    { banknote: "dollar", nominal: 50, number: "j123456789" },
    { banknote: "ruble", nominal: 50, number: "h123456789" },
  ]);

  const [filter, setFilter] = useState<FilterTypeProps>("all");
  let currentMoney = money;
  if (filter === "dollar")
    currentMoney = money.filter(
      (filteredMoney) => filteredMoney.banknote === "dollar"
    );
  if (filter === "ruble")
    currentMoney = money.filter(
      (filteredMoney) => filteredMoney.banknote === "ruble"
    );

  const onClickFilterHandler = (nameButton: FilterTypeProps) => {
    setFilter(nameButton);
  };

  const [message, setMessage] = useState([
    { message: "message1" },
    { message: "message2" },
    { message: "message3" },
    { message: "message4" },
    { message: "message5" },
  ]);

  const [message2, setMessage2] = useState([
    { message: "message21" },
    { message: "message22" },
    { message: "message23" },
    { message: "message24" },
    { message: "message25" },
  ]);

  let [title, setTitle] = useState("");

  const addMessage= (text: string) => {
    setMessage([{ message: text }, ...message]);
  };

  const addTitle= (title: string) => {
    setMessage2([{ message: title }, ...message2]);
  };

  const callbackButtonHandler = () => {
    addTitle(title);
    setTitle("");
  }

  return (
    <>
      <h1>Microtasks</h1>
      <NewComponent students={students} />
      <ListCars cars={topCars} />
      <button onClick={(event: MouseEvent<HTMLButtonElement>) => {console.log("HellO!")}}>Button-click</button>
      <button onClick={MyFirstSubscriber}>Button-click 1</button>
      <div>{a}</div>
      <button onClick={(event: MouseEvent<HTMLButtonElement>) => onClickHandler("Kate")}>Button counter</button>
      <Button name={"Click me"} callback={() => buttonFoo("sweetie", 21)} />
      <Button name={"Stupid button"} callback={ConsoleButton} />
      <MoneyComponent currentMoney={currentMoney} onClickFilterHandler={onClickFilterHandler}/>
      <FullInput nameButton={"+"} addMessage={addMessage} />
      {message.map((el, index) => {
        return <div key={index}>{el.message}</div>;
      })}
      <Input title={title} setTitle={setTitle}/>
      <Button name={"Добавить"} callback={callbackButtonHandler} />
      {message2.map((el, index) => {
        return <div key={index}>{el.message}</div>;
      })}
    </>
  );
}

export default App;
