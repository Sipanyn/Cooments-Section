import styles from "./reply-component.module.css";

const ReplyComponent = () => {
  return (
    <div className={styles.reply_container}>
      <svg className={styles.reply_icon}>
        <use href={"/sprite.svg#reply_icon"} />
      </svg>
      <p>Reply</p>
    </div>
  );
};

export default ReplyComponent;
