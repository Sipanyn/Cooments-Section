import styles from "./custom-text-box.module.css";
import { useSupa } from "../../supa-Store";
import ReplyButtonComponent from "../reply-button-component/reply-button-component";
import CustomTextAreaComponent from "../custom-text-area-component/custom-text-area-component";
import { useSendRply } from "../../../useSendReply";
const CustomTextBox = () => {
  const supa_user = useSupa((state) => state.supa_user);
  const customTextBoxValue = useSupa((state) => state.customTextBoxValue);
  const setCustomTextBoxValue = useSupa((state) => state.setCustomTextBoxValue);
  const { mutate: sendComment, isPending, error } = useSendRply();
  return (
    <div className={styles.CustomTextBox}>
      <div className={styles.user_image_container}>
        <img src={supa_user?.[0]?.[0].image_url} alt="user" />
      </div>
      <div className={styles.TextAreaComponent}>
        <CustomTextAreaComponent
          setCustomTextBoxValue={setCustomTextBoxValue}
          error={error}
        />
      </div>
      <div className={styles.ReplyButtonComponent}>
        <ReplyButtonComponent
          customTextBoxValue={customTextBoxValue}
          sendComment={sendComment}
          isPending={isPending}
          error={error}
        />
      </div>
    </div>
  );
};

export default CustomTextBox;
