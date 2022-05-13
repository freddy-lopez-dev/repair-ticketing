import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import { useState } from "react";

function App() {
  const initialRepairs = [];
  const [repairs, setRepairs] = useState(initialRepairs);
  // const [id, setId] = useState(1)

  const addRepairHandler = (description) => {
    // const repairDesc = event.target.description.value;
    setRepairs((prevState) => {
      const id = prevState.length * Math.floor(Math.random() * 1000);
      return [
        {
          id: id,
          completed: false,
          description: description,
        },
        ...prevState,
        // This will re instate the existing state
        // move below if you want the new in the first line
      ];
    });
    console.log(repairs);
  };

  const deleteRepairHandler = (id) => {
    console.log(id);
    // const targetId = +event.target.offsetParent.dataset.id;
    setRepairs((prevState) => {
      return prevState.filter((repairs) => repairs.id !== +id);
    });
  };

  const markRepairCompleted = (id) => {
    // const value = repairs.find((repair) => repair.id === id).completed;
    const updatedRepairs = repairs.map((repair) => {
      if (repair.id === +id) {
        console.log(repair.completed);
        repair.completed
          ? (repair.completed = false)
          : (repair.completed = true);
      }
      return repair;
    });

    setRepairs(updatedRepairs);
    // if (value === false) {
    //   repairs.find((repair) => repair.id === id).completed = true;
    // } else {
    //   repairs.find((repair) => repair.id === id).completed = false;
    // }
    // const updatedRepairs = [...repairs];
    // setRepairs(updatedRepairs);
  };

  const removeRepairedHandler = () => {
    setRepairs((prevState) => {
      return prevState.filter((repair) => repair.completed !== true);
    });
  };

  return (
    <section className="fixmeapp">
      <Header addRepair={addRepairHandler} />
      <Main
        repairList={repairs}
        markCompleted={markRepairCompleted}
        deleteRepair={deleteRepairHandler}
      />
      <Footer removeRepaired={removeRepairedHandler} />
    </section>
  );
}

export default App;
