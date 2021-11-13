import Button from "./button"

const GameSetting = () => {
    const handleClick = () => { }
    return (
        <div className="flex justify-center space-x-5 my-10">
            <Button handleClick={handleClick} isDisabled={true} title="Next" className="bg-next" />
            <Button handleClick={handleClick} isDisabled={true} title="Reset" className="bg-reset" />
        </div>
    )
}

export default GameSetting
