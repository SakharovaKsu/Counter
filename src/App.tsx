import React, {useEffect, useState} from 'react';
import s from './App.module.css';
import Button from './Button/Button';
import Counter from './Counter/Counter';
import CounterSet from './CounterSet/CounterSet';

function App() {
    const [startValue, setStartValue] = useState<number>(JSON.parse(localStorage.getItem('startValue') || '1'))
    const [maxValue, setMaxValue] = useState<number>(JSON.parse(localStorage.getItem('maxValue') || '5'))
    const [counter, setCounter] = useState<number>(startValue)

    const [error, setError] = useState<string>('Incorrect value')

    const [disableResetButton, setDisableResetButton] = useState(true);
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
        if (maxValue > 1 || startValue > 0) {
            setCounter(startValue);
            setDisplayCounter(true);
        }
    }

    // кнопка увелечения счетчика
    const buttonInc = () => {
        if (disableResetButton) {
            setDisableResetButton(false);
        }

        if (startValue < maxValue) {
            setCounter(counter + 1)
        }
    }

    // сброс счетчика
    const buttonReset = () => {
        setCounter(startValue)
    }

    // блокировка кнопки
    const disabledButton = startValue > maxValue || startValue < 0 || startValue === maxValue

    // блокировка кнопки inc
    const disabledButtonInc = startValue >= maxValue || startValue < 0 || counter >= maxValue || !displayCounter

    return (
        <div className={s.appContainer}>
            <div className={s.app + ' ' + s.appValue}>
                <CounterSet maxValue={maxValue}
                            startValue={startValue}
                            setStartValue={setStartValue}
                            setMaxValue={setMaxValue}
                            setError={setError}
                            setDisplayCounter={setDisplayCounter}
                            setDisableResetButton={setDisableResetButton}/>
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
