import CommentContent from "../comment-content/comment-content";
import styles from "./user-info.module.css";

const UserInfo = () => {
  return (
    <div className={styles.userInfo_container}>
      <div className={styles.info}>
        <div className={styles.user_image_container}>
          <img
            src="/images/Portrait of a confident young smart looking man _ Premium AI-generated image.jpg"
            alt="user"
          />
        </div>
        <p className={styles.user_name}>Amyrobson</p>
        <p className={styles.date}>1 month ago</p>
      </div>
      <CommentContent />
    </div>
  );
};

export default UserInfo;
