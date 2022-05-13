import Repairs from "./Repairs";

const Main = (props) => {
  return (
    <section className="main">
      <Repairs
        repairList={props.repairList}
        markCompleted={props.markCompleted}
        deleteRepair={props.deleteRepair}
      />
    </section>
  );
};

export default Main;
