import { useStoreContext } from "../context/storeContext"
import { pictureArray } from "../utils/picturesArray"

const HangMan = () => {
    const { numberOfWrongGuesses } = useStoreContext()
    return (
        <div className="grid place-items-center mb-10">
            <img src={pictureArray[numberOfWrongGuesses]} alt="" />
        </div>
    )
}

export default HangMan
