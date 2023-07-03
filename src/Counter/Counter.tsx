import React, {FC} from 'react';
import s from './Counter.module.css'

type CounterType = {
    counter: number
    error: string
    maxValue: number
    clue: string
}
const Counter: FC<CounterType> = ({counter, error, maxValue, clue}) => {

    const counterClassName = s.counter + ' ' +
        (counter === maxValue ? s.disabled : '')

    return (
        <div className={counterClassName}>
            {!error ? counter : <span className={s.error}>{error}</span>}
            {!error ? clue && counter : <span className={s.error}>{error}</span>}
        </div>
    );
};

export default Counter;