
type StateType = {
    startValue: number;
    maxValue: number;
    counter: number;
    error: string;
    disableResetButton: boolean;
    displayCounter: boolean;
}

export const initialState: StateType = {
    startValue: 1,
    maxValue: 5,
    counter: 1,
    error: '',
    disableResetButton: true,
    displayCounter: false,
};

export const reducerCounter = (state = initialState, action: AllACType): StateType => {
    switch (action.type) {
        case 'SET-START-VALUE': {
            return {...state, startValue: action.payload.num}
        }
        case 'SET-MAX-VALUE': {
            return {...state, maxValue: action.payload.num}
        }
        case 'SET-COUNTER': {
            return {...state, counter: action.payload.num}
        }
        case 'SET-ERROR': {
            return {...state, error: action.payload.text}
        }
        case 'SET-DISPLAY-COUNTER': {
            return {...state, displayCounter: action.payload.disable}
        }
        case 'SET-DISABLE-RESET-BUTTON': {
            return {...state, disableResetButton: action.payload.disable}
        }
        default:
            return state
    }
}

type SetStartValueType = ReturnType<typeof setStartValueAC>
type SetMaxValueType = ReturnType<typeof setMaxValueAC>
type SetCounterType = ReturnType<typeof setCounterAC>
type SetErrorType = ReturnType<typeof setErrorAC>
type SetDisplayCounterType = ReturnType<typeof setDisplayCounterAC>
type SetDisableResetButtonType = ReturnType<typeof setDisableResetButtonAC>
type AllACType = SetStartValueType | SetMaxValueType | SetCounterType | SetErrorType | SetDisplayCounterType | SetDisableResetButtonType

export const setStartValueAC = (num: number)  => {
    return {
        type: 'SET-START-VALUE',
        payload: {num}
    } as const
}

export const setMaxValueAC = (num: number)  => {
    return {
        type: 'SET-MAX-VALUE',
        payload: {num}
    } as const
}

export const setCounterAC = (num: number)  => {
    return {
        type: 'SET-COUNTER',
        payload: {num}
    } as const
}

export const setErrorAC = (text: string)  => {
    return {
        type: 'SET-ERROR',
        payload: {text}
    } as const
}

export const setDisplayCounterAC = (disable: boolean)  => {
    return {
        type: 'SET-DISPLAY-COUNTER',
        payload: {disable}
    } as const
}

export const setDisableResetButtonAC = (disable: boolean)  => {
    return {
        type: 'SET-DISABLE-RESET-BUTTON',
        payload: {disable}
    } as const
}