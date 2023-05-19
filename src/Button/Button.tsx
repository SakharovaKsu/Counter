import React, {FC} from 'react';
import s from'./Button.module.css'

type ButtonType = {
    name: string
    onClick: () => void
    disabled: boolean
}
const Button:FC<ButtonType> = ({name, onClick, disabled}) => {
    const buttonHandler = () => {
        onClick()
    }

    return (
        <button className={s.button} onClick={buttonHandler} disabled={disabled}>{name}</button>
    );
};

export default Button;