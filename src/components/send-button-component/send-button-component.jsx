import styles from "./send-button-component.module.css";

const SendButtonComponent = ({
  textBoxValue,
  sendComment,
  isPending,
  error,
}) => {
  return (
    <button
      onClick={() => sendComment(textBoxValue)}
      disabled={textBoxValue.trim().length === 0}
      className={styles.btn}
    >
      {isPending ? "SENDING..." : "SEND"}
    </button>
  );
};

export default SendButtonComponent;
