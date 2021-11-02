import { useEffect, useState } from "react";
import GameSetting from "./components/GameSetting";
import Guess from "./components/Guess";
import Header from "./components/Header";
import Keyboard from "./components/Keyboard";
import { nigeriaStates } from "./utils/nigeriaStates";

const App = () => {
  const [numberOfGuesses, setNumberOfGuesses] = useState(0)


  useEffect(() => {
    console.log('App rerendered')
  })
  const randomNigeriaState = nigeriaStates[Math.floor(Math.random() * nigeriaStates.length)];

  return (
    <div className="border  border-red-600">
      <div className="mx-auto w-3/5 sm:w-10/12 border border-red-500 ">
        <Header numberOfGuesses={numberOfGuesses} />
        <Guess randomNigeriaState={randomNigeriaState}/>
        <Keyboard 
        // setCurrentLetter={setCurrentLetter} currentLetter={currentLetter}
        />
        <GameSetting />
      </div>
    </div>
  )
}

export default App;
