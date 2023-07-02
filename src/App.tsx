import React, {useEffect, useState} from 'react';
import s from './App.module.css';
import Button from './Button/Button';
import Counter from './Counter/Counter';
import CounterSet from './CounterSet/CounterSet';

function App() {
    const [counter, setCounter] = useState<number>(0)
    const [startValue, setStartValue] = useState<number>(1)
    const [maxValue, setMaxValue] = useState<number>(5)
    const [error, setError] = useState<string>('')


    // установка счетчика
    const setValuesClickHandler = () => {
        if (startValue >= maxValue) {
            setError('Start value must be less than max value');
        } else {
            setCounter(startValue);
        }
    }

    // кнопка увелечения счетчика
    const buttonInc = () => {
        if (counter < maxValue) {
            setCounter(counter + 1);
        }
    }

    // сброс счетчика
    const buttonReset = () => {
        setStartValue(startValue)
    }

    // useEffect(() => {
    //     if (counter > maxValue) {
    //         setCounter(maxValue);
    //     }
    // }, [counter, maxValue]);


    return (
        <div className={s.appContainer}>
            <div className={s.app + ' ' + s.appValue}>
                <CounterSet maxValue={maxValue} startValue={startValue} setStartValue={setStartValue} setMaxValue={setMaxValue}/>
                <Button name={'Set'} onClick={setValuesClickHandler}/>
            </div>
            <div className={s.app}>
                <Counter counter={counter} error={error} maxValue={maxValue}/>
                <div className={s.box}>
                    <Button onClick={buttonInc} disabled={counter >= maxValue} name={'inc'}/>
                    <Button onClick={buttonReset} disabled={counter >= startValue} name={'reset'}/>
                </div>
            </div>
        </div>
    );
}

export default App;
