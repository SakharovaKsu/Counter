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
    const [clue, setClue] = useState<string>('')

    // установка счетчика
    const setValuesClickHandler = () => {
        if (startValue > maxValue) {
            setError('Start value must be less than max value');
        } else if(startValue < 0){
            setError('Incorrect value')
        } else if(startValue === maxValue) {
            setError('Incorrect value')
        }
        setClue('Enter values and press "set"')
        setCounter(startValue)
    }

    useEffect(() => {
        // При загрузке компонента проверяем, есть ли значение в localStorage
        const savedCount = localStorage.getItem('count');
        if (savedCount) {
            setCounter(parseInt(savedCount));
        }
    }, []);

    // if (startValue > maxValue) {
    //     setError('Start value must be less than max value');
    // } else if(startValue < 0){
    //     setError('Incorrect value')
    // } else if(startValue == maxValue) {
    //     setError('Incorrect value')
    // } else {
    //     setError('')
    // }

    // кнопка увелечения счетчика
    const buttonInc = () => {
        if (startValue < maxValue) {
            setCounter(counter + 1);
        }
    }

    // сброс счетчика
    const buttonReset = () => {
        setCounter(startValue)
    }

    useEffect(() => {
        // При изменении значения counter сохраняем его в localStorage
        localStorage.setItem('count', counter.toString());
    }, [counter]);

    // блокировка кнопки set
    const disabledButtonSet = startValue < 0 || startValue === maxValue

    // блокировка кнопки inc
    const disabledButtonInc = startValue >= maxValue || startValue < 0 || counter >= maxValue

    // блокировка кнопки reset
    const disabledButtonReset = startValue === maxValue || startValue < 0

    return (
        <div className={s.appContainer}>
            <div className={s.app + ' ' + s.appValue}>
                <CounterSet maxValue={maxValue}
                            setCounter={setCounter}
                            startValue={startValue}
                            setStartValue={setStartValue}
                            setMaxValue={setMaxValue}
                            setError={setError}
                            setClue={setClue}/>
                <Button name={'Set'} onClick={setValuesClickHandler} disabled={disabledButtonSet}/>
            </div>

            <div className={s.app}>
                <Counter counter={counter}
                         error={error}
                         maxValue={maxValue}
                         clue={clue}/>
                <div className={s.box}>
                    <Button onClick={buttonInc} disabled={disabledButtonInc} name={'inc'}/>
                    <Button onClick={buttonReset} disabled={disabledButtonReset} name={'reset'}/>
                </div>
            </div>
        </div>
    );
}

export default App;
