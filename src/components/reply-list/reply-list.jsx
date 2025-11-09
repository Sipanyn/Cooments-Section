import { useSupa } from "../../supa-Store";
import CustomTextBox from "../custom-text-box/custom-text-box";
import UserReplyComponent from "../user-reply-component/user-reply-component";
import styles from "./reply-list.module.css";

const ReplyList = ({ rply }) => {
  const setSelectedComment = useSupa((state) => state.setSelectedComment);
  const selectedRply = useSupa((state) => state.selectedRply);
  const setSelectedRply = useSupa((state) => state.setSelectedRply);
  return (
    <div className={styles.ReplyList_container}>
      <UserReplyComponent
        rply={rply}
        setSelectedComment={setSelectedComment}
        setSelectedRply={setSelectedRply}
      />
      {selectedRply?.id === rply.id && (
        <div className={styles.CustomTextBox}>
          <CustomTextBox />
        </div>
      )}
    </div>
  );
};

export default ReplyList;
