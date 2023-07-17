import React, {ChangeEvent, FC, useState} from 'react';
import s from './CounterSet.module.css'

type CounterSetType = {
    maxValue: number
    startValue: number
    setStartValue: (value: number) => void
    setMaxValue: (value: number) => void
    setError: (text: string) => void
}

const CounterSet:FC<CounterSetType> = ({ maxValue, startValue, setStartValue, setMaxValue, setError}) => {

    const onChangeStartHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValue(+e.currentTarget.value)
    }

    const onChangeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(+e.currentTarget.value)
    }

    const startInputClassName = s.input + ' ' +
        (startValue < 0 || maxValue === startValue || startValue > maxValue ? s.error : '')

    const maxInputClassName = s.input + ' ' +
        (maxValue < 0 || maxValue === startValue || maxValue < startValue ? s.error : '')

    return (
        <div className={s.boxValue}>
            <div className={s.value}>
                <label htmlFor={'max'}>Max value: </label>
                <input className={maxInputClassName} type={'number'} id={'max'} value={maxValue} onChange={onChangeMaxHandler}/>
            </div>
            <div className={s.value}>
                <label htmlFor={'start'}>Start value: </label>
                <input className={startInputClassName} type={'number'} id={'start'} value={startValue} onChange={onChangeStartHandler}/>
            </div>
        </div>
    );
};

export default CounterSet;