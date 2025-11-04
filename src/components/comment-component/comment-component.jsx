import VoteComponent from "../vote-component/vote-component";
import ReplyComponent from "../reply-component/reply-component";
import UserInfo from "../user-info/user-info";
import styles from "../comment-component/comment-component.module.css";
import ReplyList from "../reply-list/reply-list";

const CommentComponent = () => {
  return (
    <>
      <div className={styles.comment_container}>
        <div className={styles.VoteComponent}>
          <VoteComponent />
        </div>
        <div className={styles.UserInfo}>
          <UserInfo />
        </div>
        <div className={styles.ReplyComponent}>
          <ReplyComponent />
        </div>
      </div>
      <ReplyList />
    </>
  );
};

export default CommentComponent;
