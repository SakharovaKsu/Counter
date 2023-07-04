import React, {useEffect, useState} from 'react';
import s from './App.module.css';
import Button from './Button/Button';
import Counter from './Counter/Counter';
import CounterSet from './CounterSet/CounterSet';

function App() {
    const [startValue, setStartValue] = useState<number>(1)
    const [maxValue, setMaxValue] = useState<number>(5)
    const [counter, setCounter] = useState<number>(startValue)
    const [error, setError] = useState<string>('Incorrect value')
    const [displayCounter, setDisplayCounter] = useState<boolean>(false);

    // установка счетчика
    const setValuesClickHandler = () => {
        if (startValue > maxValue) {
            setError('Start value must be less than max value');
        } else if (maxValue > 1 || startValue > 0) {
            setCounter(startValue);
            setDisplayCounter(true);
        }
    }

    useEffect(() => {
        // При загрузке компонента проверяем, есть ли значение в localStorage
        const savedCount = localStorage.getItem('count');
        if (savedCount) {
            setCounter(parseInt(savedCount));
        }
    }, []);

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

    // блокировка кнопки
    const disabledButton = startValue > maxValue || startValue < 0 || startValue === maxValue

    // блокировка кнопки inc
    const disabledButtonInc = startValue >= maxValue || startValue < 0 || counter >= maxValue

    return (
        <div className={s.appContainer}>
            <div className={s.app + ' ' + s.appValue}>
                <CounterSet maxValue={maxValue}
                            setCounter={setCounter}
                            startValue={startValue}
                            setStartValue={setStartValue}
                            setMaxValue={setMaxValue}
                            setError={setError}/>
                <Button name={'Set'} onClick={setValuesClickHandler} disabled={disabledButton}/>
            </div>

            <div className={s.app}>
                <Counter counter={counter}
                         error={error}
                         maxValue={maxValue}
                         startValue={startValue}
                         displayCounter={displayCounter}/>
                <div className={s.box}>
                    <Button onClick={buttonInc} disabled={disabledButtonInc} name={'inc'}/>
                    <Button onClick={buttonReset} disabled={disabledButton} name={'reset'}/>
                </div>
            </div>
        </div>
    );
}

export default App;
