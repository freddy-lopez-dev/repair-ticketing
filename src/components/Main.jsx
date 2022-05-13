import Repairs from "./Repairs";

const Main = (props) => {
  return (
    <section className="main">
      <Repairs
        repairList={props.repairList}
        markCompleted={props.markCompleted}
      />
    </section>
  );
};

export default Main;
