import "./App.css";
import CommentList from "./components/comment-list/comment-list";
import MainTextBox from "./components/main-text-box/main-text-box";

function App() {
  return (
    <div className="main">
      <CommentList />
      <MainTextBox />
    </div>
  );
}

export default App;
