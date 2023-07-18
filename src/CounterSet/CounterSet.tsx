import React, {ChangeEvent, FC, useState} from 'react';
import s from './CounterSet.module.css'

type CounterSetType = {
    maxValue: number
    startValue: number
    setStartValue: (value: number) => void
    setMaxValue: (value: number) => void
    setError: (text: string) => void
    setDisplayCounter: (value: boolean) => void
    setDisableResetButton: (value: boolean) => void
}

const CounterSet:FC<CounterSetType> = ({ maxValue, startValue, setStartValue, setMaxValue,  setDisplayCounter, setDisableResetButton}) => {

    const onChangeStartHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValue(+e.currentTarget.value)
    }

    const onChangeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(+e.currentTarget.value)
    }

    const isErrorStartInput = startValue < 0 || maxValue === startValue || startValue > maxValue
    const isErrorMaxInput = maxValue < 0 || maxValue === startValue || maxValue < startValue

    const startInputClassName = s.input + ' ' +
        (isErrorStartInput  ? s.error : '')

    const maxInputClassName = s.input + ' ' +
        (isErrorMaxInput ? s.error : '')

    const onClickHandlerInput = () => {
        setDisplayCounter(false);
        setDisableResetButton(true)
    }

    return (
        <div className={s.boxValue}>
            <div className={s.value}>
                <label htmlFor={'max'}>Max value: </label>
                <input className={maxInputClassName}
                       type={'number'}
                       id={'max'}
                       value={maxValue}
                       onChange={onChangeMaxHandler}
                       onClick={onClickHandlerInput}/>
            </div>
            <div className={s.value}>
                <label htmlFor={'start'}>Start value: </label>
                <input className={startInputClassName}
                       type={'number'}
                       id={'start'}
                       value={startValue}
                       onChange={onChangeStartHandler}
                       onClick={onClickHandlerInput}/>
            </div>
        </div>
    );
};

export default CounterSet;