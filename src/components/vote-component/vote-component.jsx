import DecremnetComponent from "../decremnet-component/decremnet-component";
import IncrementComponent from "../increment-component/increment-component";
import styles from "./vote-component.module.css";

const VoteComponent = () => {
  return (
    <div className={styles.vote_container}>
      <IncrementComponent />
      <p className={styles.count}>3</p>
      <DecremnetComponent />
    </div>
  );
};

export default VoteComponent;
