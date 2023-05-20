import React, {FC, useState} from 'react';
import s from './Counter.module.css'

type CounterType = {
    counter: number
}
const Counter: FC<CounterType> = ({counter}) => {

    const counterClassName = s.counter + ' ' +
        (counter === 5 ? s.disabled : '')

    return (
        <div className={counterClassName}>{counter}</div>
    );
};

export default Counter;