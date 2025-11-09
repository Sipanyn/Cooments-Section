import DeleteComponent from "../delete-component/delete-component";
import EditComponent from "../edit-component/edit-component";
import ReplyComponent from "../reply-component/reply-component";
import UserInfo from "../user-info/user-info";
import VoteComponent from "../vote-component/vote-component";
import styles from "./user-reply-component.module.css";

const UserReplyComponent = ({
  rply,
  setSelectedComment,
  setSelectedRply,
  setLastSelected,
  selectedRply,
}) => {
  return (
    <div className={styles.reply_container}>
      <div className={styles.VoteComponent}>
        <VoteComponent rply={rply} />
      </div>
      <div className={styles.UserInfo}>
        <UserInfo rply={rply} />
      </div>
      {rply.username === "Tom Rey" && (
        <div className={styles.delete_edit}>
          <DeleteComponent rply={rply} />
          <EditComponent />
        </div>
      )}
      <div className={styles.ReplyComponent}>
        <ReplyComponent
          setSelectedComment={setSelectedComment}
          setSelectedRply={setSelectedRply}
          setLastSelected={setLastSelected}
          selectedRply={selectedRply}
          rply={rply}
        />
      </div>
    </div>
  );
};

export default UserReplyComponent;
