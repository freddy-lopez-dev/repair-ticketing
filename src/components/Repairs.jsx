import Repair from "./Repair";

const Repairs = (props) => {
  const { repairList } = props;
  return (
    <ul className="repair-list">
      {
        repairList.map((repair) => {
          return (
            <Repair
              key={repair.id}
              id={repair.id}
              description={repair.description}
              completed={repair.completed}
              markCompleted={props.markCompleted}
              deleteRepair={props.deleteRepair}
            />
          );
        })
        /* <Repair id={1} description={"Faucet is leaking"} completed={false} /> */
      }
    </ul>
  );
};

export default Repairs;
