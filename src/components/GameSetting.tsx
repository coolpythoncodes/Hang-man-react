import Button from "./button"

const GameSetting = () => {
    const handleClick = () => { }
    return (
        <div className="flex justify-center space-x-5 mt-10">
            <Button handleClick={handleClick} title="Next" className="bg-[#28a745]" />
            <Button handleClick={handleClick} title="Reset" className="bg-[#17a2b8]" />
        </div>
    )
}

export default GameSetting
