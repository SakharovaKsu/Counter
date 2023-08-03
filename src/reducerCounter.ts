
type StateType = {
    startValue: number
    maxValue: number
    counter: number
    error: string
}

export const initialState: StateType = {
    startValue: 1,
    maxValue: 5,
    counter: 1,
    error: 'Incorrect value'
};

export const reducerCounter = (state = initialState, action: AllACType): StateType => {
    switch (action.type) {
        case 'SET-START-VALUE': {
            return {...state, startValue: action.payload.startValue}
        }
        case 'SET-MAX-VALUE': {
            return {...state, maxValue: action.payload.maxValue}
        }
        case 'SET-COUNTER': {
            return {...state, counter: action.payload.counter}
        }
        case 'SET-ERROR': {
            return {...state, error: action.payload.text}
        }
        default:
            return state
    }
}

type SetStartValueType = ReturnType<typeof setStartValueAC>
type SetMaxValueType = ReturnType<typeof setMaxValueAC>
type SetCounterType = ReturnType<typeof setCounterAC>
type SetErrorType = ReturnType<typeof setErrorAC>
type AllACType = SetStartValueType | SetMaxValueType | SetCounterType | SetErrorType

export const setStartValueAC = (startValue: number)  => {
    return {
        type: 'SET-START-VALUE',
        payload: {startValue}
    } as const
}

export const setMaxValueAC = (maxValue: number)  => {
    return {
        type: 'SET-MAX-VALUE',
        payload: {maxValue}
    } as const
}

export const setCounterAC = (counter: number)  => {
    return {
        type: 'SET-COUNTER',
        payload: {counter}
    } as const
}

export const setErrorAC = (text: string)  => {
    return {
        type: 'SET-ERROR',
        payload: {text}
    } as const
}
