import Footer from "./components/footer";
import GameSetting from "./components/GameSetting";
import Guess from "./components/Guess";
import HangMan from "./components/HangMan";
import Header from "./components/Header";
import Keyboard from "./components/Keyboard";

const App = () => {

  const TotalNumberOfGuessesAllowed = 6

  return (
    <div>
      <div className="mx-auto w-4/5 sm:w-10/12 ">
        <Header />
        <HangMan />
        <Guess />
        <Keyboard TotalNumberOfGuessesAllowed={TotalNumberOfGuessesAllowed} />
        <GameSetting />
        <Footer />
      </div>
    </div>
  )
}

export default App;
