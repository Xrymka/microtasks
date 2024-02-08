import { MouseEvent , useState } from 'react';
import { NewComponent } from "./components/NewComponent";
import { ListCars } from "./components/ListCars";
import { Button } from './components/Button';

function App() {
    const [students, setStudents] = useState([
            {id: 1, name: "James", age: 8},
            {id: 2, name: "Robert", age: 18},
            {id: 3, name: "John", age: 28},
            {id: 4, name: "Michael", age: 38},
            {id: 5, name: "William", age: 48},
            {id: 6, name: "David", age: 58},
            {id: 7, name: "Richard", age: 68},
            {id: 8, name: "Joseph", age: 78},
            {id: 9, name: "Thomas", age: 88},
            {id: 10, name: "Charles", age: 98},
            {id: 11, name: "Christopher", age: 100},
        ]
    )

    const topCars = [
        {manufacturer: 'BMW', model: 'X5'},
        {manufacturer: 'Mersedes', model: 'MLS'},
        {manufacturer: 'Audi', model: 'Q7'}
    ]

    const MyFirstSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
        console.log('Hello, Im Kate!')
    }

    const ConsoleButton = () => {
        console.log('Hello, it is easy')
    }

    const onClickHandler = (name: string) => {
        console.log("Hello, " + name)
    }

    const buttonFoo = (call: string, age: number) => {
        console.log("Hello, " + call + ". I'm " + age + " years old")
    }

    return (
        <>
            <h1>Microtasks</h1>
            <NewComponent students={students}/>
            <ListCars cars={topCars}/>
            <button onClick={(event: MouseEvent<HTMLButtonElement>) => {console.log('HellO!')}}>Button-click</button>
            <button onClick={MyFirstSubscriber}>Button-click 1</button>
            <button onClick={(event: MouseEvent<HTMLButtonElement>) => onClickHandler('Kate')}>Button-click 2</button>
            <Button name={'Click me'} callback={() => buttonFoo('sweetie', 21)} />
            <Button name={'Stupid button'} callback={ConsoleButton} />
        </>
    );
}

export default App;
