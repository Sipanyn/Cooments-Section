import styles from "./query-error-message.module.css";

const QueryErrorMessage = () => {
  return (
    <div className={styles.queryErrorMessage}>
      <svg className={styles.queryErrorMessage_icon}>
        <use href={"/sprite.svg#wrong_icon"} />
      </svg>
      Oops! Something went wrong. We're working on it — please try again
      shortly.
    </div>
  );
};

export default QueryErrorMessage;
