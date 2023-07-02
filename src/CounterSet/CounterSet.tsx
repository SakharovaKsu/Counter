import React, {ChangeEvent, FC, useState} from 'react';
import s from './CounterSet.module.css'

type CounterSetType = {
    maxValue: number
    startValue: number
    setStartValue: (value: number) => void
    setMaxValue: (value: number) => void
}

const CounterSet:FC<CounterSetType> = ({maxValue, startValue, setStartValue, setMaxValue}) => {

    const onChangeStartHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValue(+e.currentTarget.value)
        console.log(+e.currentTarget.value)
    }

    const onChangeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(+e.currentTarget.value)
        console.log(+e.currentTarget.value)
    }

    return (
        <div className={s.boxValue}>
            <div className={s.value}>
                <label htmlFor={'max'}>Max value: </label>
                <input className={s.input} type={'number'} id={'max'} value={maxValue} onChange={onChangeMaxHandler}/>
            </div>
            <div className={s.value}>
                <label htmlFor={'start'}>Start value: </label>
                <input className={s.input} type={'number'} id={'start'} value={startValue} onChange={onChangeStartHandler}/>
            </div>
        </div>
    );
};

export default CounterSet;