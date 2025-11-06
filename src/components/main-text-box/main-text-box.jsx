import { useState } from "react";
import SendButtonComponent from "../send-button-component/send-button-component";
import TextAreaComponent from "../text-area-component/text-area-component";
import styles from "./main-text-box.module.css";
import { useSendComment } from "../../../useSendComment";
import { useSupa } from "../../supa-Store";

const MainTextBox = () => {
  const supa_user = useSupa((state) => state.supa_user);
  const textBoxValue = useSupa((state) => state.textBoxValue);
  const setTextBoxValue = useSupa((state) => state.setTextBoxValue);
  const { mutate: sendComment, isPending, error } = useSendComment();

  return (
    <div className={styles.MainTextBox}>
      <div className={styles.user_image_container}>
        <img src={supa_user?.[0]?.[0].image_url} alt="user" />
      </div>
      <div className={styles.TextAreaComponent}>
        <TextAreaComponent setTextBoxValue={setTextBoxValue} error={error} />
      </div>
      <div className={styles.SendButtonComponent}>
        <SendButtonComponent
          textBoxValue={textBoxValue}
          sendComment={sendComment}
          isPending={isPending}
          error={error}
        />
      </div>
    </div>
  );
};

export default MainTextBox;
