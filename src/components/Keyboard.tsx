import { title } from "process";
import { useStoreContext } from "../context/storeContext";
import Button from "./button";


type KeyboardProps = {
    randomNigeriaState: string;
    TotalNumberOfGuessesAllowed: number;
}


const Keyboard = ({ randomNigeriaState, TotalNumberOfGuessesAllowed }: KeyboardProps
) => {

    const { setStore, store, gameOver } = useStoreContext()
    const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("")



    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const letterClicked = event.currentTarget.name
        // @ts-ignore
        setStore(prevState => ({ ...prevState, userClickedLetter: [...prevState.userClickedLetter, letterClicked] }))
        const correctGuess = randomNigeriaState.includes(letterClicked)
        if (!correctGuess && !store.gameOver) {
            // @ts-ignore
            setStore((prevState) => ({ ...prevState, numberOfWrongGuesses: prevState.numberOfWrongGuesses + 1 }))
        }
        if (store.numberOfWrongGuesses === TotalNumberOfGuessesAllowed - 1) {
            // @ts-ignore
            setStore((prevState) => ({ ...prevState, gameOver: true }))
        }

    }
    return (
        <div className="flex justify-center space-x-4 gap-y-4 flex-wrap">
            {
                gameOver ?
                    <p className="my-5">You Lost! Try Again!!</p> :
                    <>
                        {alphabetArray.map(
                            (letter, index) =>
                                <Button
                                    key={index}
                                    isDisabled={store.userClickedLetter.includes(letter)}
                                    handleClick={handleClick}
                                    title={letter}
                                    name={letter}
                                    className="bg-primary" />)}
                    </>
            }
        </div>
    )
}

export default Keyboard;
