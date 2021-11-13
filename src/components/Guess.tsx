import { useStoreContext } from "../context/storeContext";

type GuessProps = {
    randomNigeriaState: string;
}

const Guess = ({ randomNigeriaState }: GuessProps) => {
    const { userClickedLetter, gameOver } = useStoreContext()
    return (
        <div className="flex justify-center">
            <div>
                <p>Guess the Nigeria State :</p>
                <p className="text-center my-5">
                    {
                        gameOver ? <p>{randomNigeriaState}</p> : <>{randomNigeriaState?.split("")?.map((letter: string, index: number) => <span key={index} className="px-1">{userClickedLetter.includes(letter) ? letter : "-"}</span>)}</>
                    }
                </p>
            </div>
        </div>
    )
}

export default Guess;
