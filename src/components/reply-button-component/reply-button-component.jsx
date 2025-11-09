import styles from "./reply-button-component.module.css";

const ReplyButtonComponent = ({
  customTextBoxValue,
  sendComment,
  isPending,
  error,
}) => {
  return (
    <button
      onClick={() => sendComment(customTextBoxValue)}
      disabled={customTextBoxValue?.trim().length === 0}
      className={styles.btn}
    >
      {isPending ? "REPLYING..." : "Reply"}
    </button>
  );
};

export default ReplyButtonComponent;
