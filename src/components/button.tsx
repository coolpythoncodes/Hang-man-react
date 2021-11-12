import React from "react"

type ButtonProps = {
    title: string;
    isDisabled?: boolean;
    className?: string;
    name?: string;
    handleClick: (event: React.MouseEvent<HTMLButtonElement>, letter?: string) => void;
}

const Button = ({ title, className, handleClick, isDisabled, name }: ButtonProps) => {
    return (
        <button disabled={isDisabled} onClick={handleClick} name={name}
            className={`text-white py-4 px-5 rounded-md  ${className} ${isDisabled ? 'bg-opacity-30' : 'hover:bg-opacity-70'}`}>
            {title}
        </button>
    )
}

export default Button;
