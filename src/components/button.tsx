import React from "react"

type ButtonProps = {
    title: string;
    backgroundColor: string;
    handleClick: (event:React.MouseEvent<HTMLButtonElement>, letter?:string) => void;
}

const Button = ({title, backgroundColor, handleClick}:ButtonProps) => {
    return (
        <button onClick={handleClick} style={{background:`${backgroundColor}`}} className="text-white py-4 px-5 rounded-md ">
            {title}
        </button>
    )
}

export default Button;
