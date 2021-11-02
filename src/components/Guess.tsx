
type GuessProps = {
    randomNigeriaState: string;
}

const Guess = ({ randomNigeriaState }: GuessProps) => {
    return (
        <div className="flex justify-center">
            <div>
                <p>Guess the Nigeria State :</p>
                <p>{randomNigeriaState}</p>
                {/* <p className="text-center">{randomNigeriaState.map((letter, index) => <span>lett</span>)}</p> */}
            </div>
        </div>
    )
}

export default Guess;
