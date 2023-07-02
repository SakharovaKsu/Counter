import React from 'react';
import s from './CounterSet.module.css'

const CounterSet = () => {
    return (
        <div className={s.boxValue}>
            <div className={s.value}>
                <label htmlFor={'max'}>Max value: </label>
                <input className={s.input} type={'number'} id={'max'}/>
            </div>
            <div className={s.value}>
                <label htmlFor={'min'}>Min value: </label>
                <input className={s.input} type={'number'} id={'min'}/>
            </div>
        </div>
    );
};

export default CounterSet;