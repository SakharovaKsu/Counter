import React, {useState} from 'react';
import s from './App.module.css';
import Button from './Button/Button';
import Counter from './Counter/Counter';
import CounterSet from './CounterSet/CounterSet';

function App() {
    const [counter, setCounter] = useState<number>(0)

    const buttonInc = () => {
        setCounter(value => value + 1)
    }

    const buttonReset = () => {
        setCounter(0)
    }

    return (
        <div className={s.appContainer}>
            <div className={s.app + ' ' + s.appValue}>
                <CounterSet/>
                <Button name={'Set'} onClick={() => {}}/>
            </div>
            <div className={s.app}>
                <Counter counter={counter} />
                <div className={s.box}>
                    <Button onClick={buttonInc} disabled={counter === 5} name={'inc'}/>
                    <Button onClick={buttonReset} disabled={counter === 0} name={'reset'}/>
                </div>
            </div>
        </div>
    );
}

export default App;
