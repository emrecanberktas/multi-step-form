import "./App.css";
import Navbar from "./components/navbar";
import PersonalInfo from "./components/personalInfo";
import PickAddons from "./components/pickAddons";
import SelectPlan from "./components/selectPlan";

import { useSelector } from "react-redux";

function App() {
  const page = useSelector((state: any) => state.counter.page);
  const name = useSelector((state: any) => state.counter.name);
  const conditionalRender = () => {
    switch (page) {
      case 1:
        return <PersonalInfo />;
      case 2:
        return <SelectPlan />;
      case 3:
        return <PickAddons />;
      default:
        return <PersonalInfo />;
    }
  };
  console.log({ page });
  console.log({ name });
  return (
    <div className="App">
      <Navbar />
      {conditionalRender()}
    </div>
  );
}

export default App;
