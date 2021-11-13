import { useStoreContext } from "../context/storeContext"
import { getRandomNigeriaState } from "../utils/helpers/gameControl.helpers"
import { initialState } from "../utils/helpers/store.helpers"
import { nigeriaStates } from "../utils/nigeriaStates"
import Button from "./button"

const GameSetting = () => {
    const { isGameOver, isGameWon, setStore } = useStoreContext()

    const restartGame = () => {
        setStore({
            ...initialState,
            randomNigeriaState: getRandomNigeriaState(nigeriaStates),
        })
    }
    return (
        <div className="flex justify-center space-x-5 my-10">
            <Button handleClick={restartGame} isDisabled={!isGameWon} title="Next" className="bg-next" />
            <Button handleClick={restartGame} isDisabled={!isGameOver} title="Reset" className="bg-reset" />
        </div>
    )
}

export default GameSetting
