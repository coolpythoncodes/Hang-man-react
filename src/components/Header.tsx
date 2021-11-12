import { useStoreContext } from "../context/storeContext";

const Header = () => {
    const { numberOfWrongGuesses } = useStoreContext()
    return (
        <div className="flex flex-col">
            <h1 className="text-center text-4xl font-medium">Hangman</h1>
            <small className="ml-auto">Wrong Guesses: {numberOfWrongGuesses} of 6</small>
        </div>
    )
}

export default Header;
