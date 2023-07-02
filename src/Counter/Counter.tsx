import React, {FC, useState} from 'react';
import s from './Counter.module.css'

type CounterType = {
    counter: number
    error: string
    maxValue: number
}
const Counter: FC<CounterType> = ({counter, error, maxValue}) => {

    const counterClassName = s.counter + ' ' +
        (counter === maxValue ? s.disabled : '')


    return (
        <div className={counterClassName}>
            {error ? <span className={s.error}>{error}</span> : counter}
        </div>
    );
};

export default Counter;