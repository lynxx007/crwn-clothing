import React from 'react'
import './button.styles.jsx'
import { BaseButton, GoogleSignInButton, InvertedButton, LoadingSpinner } from './button.styles.jsx'
export const BUTTON_TYPE_CLASS = {
    base: 'base',
    google: 'google-sign-in',
    inverted: 'inverted'
}

const getButton = (buttonType = BUTTON_TYPE_CLASS.base) => ({
    [BUTTON_TYPE_CLASS.base]: BaseButton,
    [BUTTON_TYPE_CLASS.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASS.inverted]: InvertedButton,
}[buttonType]

)


export const Button = ({ children, buttonType, isLoading, ...otherProps }) => {
    const CustomButton = getButton(buttonType)
    return (

        <CustomButton disabled={isLoading} {...otherProps}>
            {isLoading ? <LoadingSpinner /> : children}
        </CustomButton>

    )
}
