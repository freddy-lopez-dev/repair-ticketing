import Repair from "./Repair";

const Repairs = (props) => {
  const { repairList, markCompleted } = props;
  return (
    <ul className="repair-list">
      {
        repairList.map((repair, index) => {
          return (
            <Repair
              key={index}
              id={index}
              description={repair.description}
              completed={repair.completed}
              markCompleted={markCompleted}
            />
          );
        })
        /* <Repair id={1} description={"Faucet is leaking"} completed={false} /> */
      }
    </ul>
  );
};

export default Repairs;
