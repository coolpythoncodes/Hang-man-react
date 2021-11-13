import { useStoreContext } from "../context/storeContext";

const Guess = () => {
    const { userClickedLetter, isGameOver, randomNigeriaState } = useStoreContext()
    return (
        <div className="flex justify-center">
            <div>
                <p>Guess the Nigeria State :</p>
                <p className="text-center my-5">
                    {
                        isGameOver ? <p>{randomNigeriaState}</p> : <>{randomNigeriaState?.split("")?.map((letter: string, index: number) => <span key={index} className="px-1">{userClickedLetter.includes(letter) ? letter : "-"}</span>)}</>
                    }
                </p>
            </div>
        </div>
    )
}

export default Guess;
