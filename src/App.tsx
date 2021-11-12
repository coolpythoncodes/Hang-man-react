import { useEffect } from "react";
import GameSetting from "./components/GameSetting";
import Guess from "./components/Guess";
import HangMan from "./components/HangMan";
import Header from "./components/Header";
import Keyboard from "./components/Keyboard";
import { nigeriaStates } from "./utils/nigeriaStates";

const App = () => {

  const TotalNumberOfGuessesAllowed = 6
  useEffect(() => {
    console.log('App rerendered')
  })
  const randomNigeriaState = nigeriaStates[Math.floor(Math.random() * nigeriaStates.length)];

  return (
    <div>
      <div className="mx-auto w-4/5 sm:w-10/12 ">
        <Header />
        <HangMan />
        <Guess randomNigeriaState={randomNigeriaState} />
        <Keyboard randomNigeriaState={randomNigeriaState} TotalNumberOfGuessesAllowed={TotalNumberOfGuessesAllowed} />
        <GameSetting />
      </div>
    </div>
  )
}

export default App;
