import UserReplyComponent from "../user-reply-component/user-reply-component";
import styles from "./reply-list.module.css";

const ReplyList = () => {
  return (
    <div className={styles.ReplyList_container}>
      {Array(2)
        .fill()
        .map((item, i) => {
          return <UserReplyComponent key={i} />;
        })}
    </div>
  );
};

export default ReplyList;
