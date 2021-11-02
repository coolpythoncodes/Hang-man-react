import { useState } from "react";
import Button from "./button";

// type KeyboardProps = {
//     setCurrentLetter: (letter: string) => void;
//     currentLetter: string;
// }

const Keyboard = (
    // { setCurrentLetter, currentLetter }: KeyboardProps
) => {
    const [currentLetter, setCurrentLetter] = useState("")
    const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("")


    const handleClick = (letter: string) => {
        setCurrentLetter(letter);
        console.log(letter);
    }

    return (
        <div className="flex justify-center space-x-4 gap-y-4 flex-wrap">
            {alphabetArray.map((letter, index) => <Button key={index} handleClick={(event) => handleClick(letter)} title={letter} backgroundColor="#007bff" />)}
        </div>
    )
}

export default Keyboard;
