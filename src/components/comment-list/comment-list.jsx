import CommentComponent from "../comment-component/comment-component";
import styles from "./comment-list.module.css";

const CommentList = () => {
  return (
    <div className={styles.CommentList_container}>
      {Array(2)
        .fill()
        .map((item, i) => {
          return <CommentComponent key={i} />;
        })}
    </div>
  );
};

export default CommentList;
