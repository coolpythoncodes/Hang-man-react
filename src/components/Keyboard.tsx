import { useEffect } from "react";
import { useStoreContext } from "../context/storeContext";
import { checkGameOver, checkGameWon } from "../utils/helpers/gameControl.helpers";
import Button from "./button";


type KeyboardProps = {
    TotalNumberOfGuessesAllowed: number;
}

const Keyboard = ({ TotalNumberOfGuessesAllowed }: KeyboardProps
) => {

    const { setStore, store, isGameOver, isGameWon, randomNigeriaState } = useStoreContext()
    const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("")

    useEffect(() => {
        checkGameOver(store, setStore, TotalNumberOfGuessesAllowed)
        checkGameWon(isGameOver, randomNigeriaState, store, setStore)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [store.userClickedLetter])

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const letterClicked = event.currentTarget.name
        // @ts-ignore
        setStore(prevState => ({ ...prevState, userClickedLetter: [...prevState.userClickedLetter, letterClicked] }))
        const correctGuess = randomNigeriaState.includes(letterClicked)

        // update the number of wrong guesses 
        if (!correctGuess && !store.isGameOver) {
            // @ts-ignore
            setStore((prevState) => ({ ...prevState, numberOfWrongGuesses: prevState.numberOfWrongGuesses + 1 }))
        }
        // Determine if the game is over
        if (store.numberOfWrongGuesses === TotalNumberOfGuessesAllowed) {
            // @ts-ignore
            setStore((prevState) => ({ ...prevState, isGameOver: true }))
        }



    }
    return (
        <div className="flex justify-center space-x-4 gap-y-4 flex-wrap">
            <>
                {
                    isGameOver ?
                        <p className="my-5">You Lost! Try Again!!</p> :
                        isGameWon ? <p className="my-5">You Won!</p> :
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
            </>
        </div>
    )
}

export default Keyboard;
