import "./App.css";
import Navbar from "./components/navbar";
import PersonalInfo from "./components/personalInfo";
import PickAddons from "./components/pickAddons";

function App() {
  return (
    <div className="App">
      <Navbar />
      <PickAddons />
    </div>
  );
}

export default App;
