import React, {useEffect, useState} from 'react';
import s from './App.module.css';
import Button from './Button/Button';
import Counter from './Counter/Counter';
import CounterSet from './CounterSet/CounterSet';

// доработать
// класс красные инпуты когда блокируются кнопки
// при накрутки инпута - блокируется кнопка inc и там надпись должна быть enter value and press "set"

function App() {
    const [startValue, setStartValue] = useState<number>(JSON.parse(localStorage.getItem('startValue') || '1'))
    const [maxValue, setMaxValue] = useState<number>(JSON.parse(localStorage.getItem('maxValue') || '5'))
    const [counter, setCounter] = useState<number>(startValue)
    const [error, setError] = useState<string>('Incorrect value')
    const [displayCounter, setDisplayCounter] = useState<boolean>(false);

    // Сохранение значения при изменении счетчика
    // JSON.stringify - преобразование в строку
    useEffect(() => {
        localStorage.setItem('startValue', JSON.stringify(startValue));
    }, [startValue]);

    useEffect(() => {
        localStorage.setItem('maxValue', JSON.stringify(maxValue));
    }, [maxValue]);

    // установка счетчика
    const setValuesClickHandler = () => {
        if (startValue > maxValue) {
            setError('Start value must be less than max value');
        } else if (maxValue > 1 || startValue > 0) {
            setCounter(startValue);
            setDisplayCounter(true);
        }
    }

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

    // блокировка кнопки
    const disabledButton = startValue > maxValue || startValue < 0 || startValue === maxValue

    // блокировка кнопки inc
    const disabledButtonInc = startValue >= maxValue || startValue < 0 || counter >= maxValue

    return (
        <div className={s.appContainer}>
            <div className={s.app + ' ' + s.appValue}>
                <CounterSet maxValue={maxValue}
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
