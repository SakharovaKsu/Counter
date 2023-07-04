import React, {FC, useState} from 'react';
import s from './Counter.module.css'

type CounterType = {
    counter: number
    error: string
    maxValue: number
    startValue: number
    displayCounter: boolean
}
const Counter: FC<CounterType> = ({counter, error, maxValue, startValue,displayCounter}) => {

    const isInitDataIsWrong =
        maxValue < 1 || startValue < 0 || startValue >= maxValue || startValue === maxValue

    const counterClassName = s.counter + ' ' +
        (counter === maxValue ? s.disabled : '')

    return (
        <div className={counterClassName}>
            {!displayCounter ? (isInitDataIsWrong ? <p className={s.error + ' ' + s.p}>{error}</p> : <p className={s.p}>enter value and press "set"</p>) : counter}
        </div>
    );
};

export default Counter;