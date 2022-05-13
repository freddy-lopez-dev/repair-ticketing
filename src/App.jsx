import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import { useState } from "react";

function App() {
  const initialRepairs = [];
  const [repairs, setRepairs] = useState(initialRepairs);
  const addRepairHandler = (event) => {
    const repairDesc = event.target.description.value;
    setRepairs((prevState) => {
      return [
        ...prevState,
        {
          id: repairs.length,
          completed: false,
          description: repairDesc,
        },
      ];
    });
    event.preventDefault();
  };

  const markRepairCompleted = (event) => {
    const targetId = +event.target.offsetParent.dataset.id;
    const value = repairs.find((repair) => repair.id === targetId).completed;
    if (value === false) {
      repairs.find((repair) => repair.id === targetId).completed = true;
    } else {
      repairs.find((repair) => repair.id === targetId).completed = false;
    }
    const newRepairs = [...repairs];
    setRepairs(newRepairs);
  };

  return (
    <section className="fixmeapp">
      <Header addRepair={addRepairHandler} />
      <Main repairList={repairs} markCompleted={markRepairCompleted} />
      <Footer />
    </section>
  );
}

export default App;