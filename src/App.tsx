import React, {useState} from 'react';
import s from './App.module.css';
import Button from "./Button/Button";

function App() {
    const [counter, setCounter] = useState(0)

    const buttonInc = () => {
        setCounter(counter + 1)
    }

    const buttonReset = () => {
        setCounter(0)
    }

    const counterClassName = s.counter + ' ' +
        (counter === 5 ? s.disabled : '')

    return (
        <div className={s.App}>
            <div className={counterClassName}>{counter}</div>
            <div className={s.box}>
                <Button onClick={buttonInc} disabled={counter === 5} name={'inc'}/>
                <Button onClick={buttonReset} disabled={counter === 0} name={'reset'}/>
            </div>
        </div>
    );
}

export default App;
