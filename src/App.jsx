import "./App.css";
import CommentList from "./components/comment-list/comment-list";
import MainTextBox from "./components/main-text-box/main-text-box";
import useDataQueryHook from "../useDataQueryHook";
import { useEffect } from "react";
import { useSupa } from "./supa-Store";
function App() {
  const { commentQuery, replyQuery } = useDataQueryHook();
  const setData = useSupa((state) => state.setData);
  const setReplies = useSupa((state) => state.setReplies);
  useEffect(() => {
    if (replyQuery && commentQuery.data) {
      setReplies(replyQuery.data);
      setData(commentQuery.data);
    }
  });

  if (commentQuery.isLoading && replyQuery.isLoading) {
    return <p className="isloading">is loading</p>;
  }

  return (
    <div className="main">
      <CommentList />
      <MainTextBox />
    </div>
  );
}

export default App;
