
type HeaderProps = {
    numberOfGuesses: number;
}

const Header = ({ numberOfGuesses }: HeaderProps) => {

    return (
        <div className="flex flex-col">
            <h1 className="text-center text-4xl font-medium">Hangman</h1>
            <small className="ml-auto">Wrong Guesses: {numberOfGuesses} of 6</small>
        </div>
    )
}

export default Header;
