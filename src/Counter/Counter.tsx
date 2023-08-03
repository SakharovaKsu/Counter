import React, {FC, useState} from 'react';
import s from './Counter.module.css'
import {useSelector} from 'react-redux';
import {AppRootStateType} from '../ store';

type CounterType = {
    counter: number
    maxValue: number
    startValue: number
    displayCounter: boolean
}
const Counter: FC<CounterType> = ({counter, maxValue, startValue, displayCounter}) => {

    const error = useSelector<AppRootStateType, string>(state => state.counter.error);

    const isInitDataIsWrong =
        maxValue < 1 || startValue < 0 || startValue >= maxValue || startValue === maxValue

    const counterClassName = s.counter + ' ' +
        (counter === maxValue ? s.disabled : '')

    return (
        <div className={counterClassName}>
            {!displayCounter ? isInitDataIsWrong ? <p className={s.error + ' ' + s.p}>{error}</p> : <p className={s.p}>Enter value and press "set"</p> : counter}
        </div>
    );
};

export default Counter;