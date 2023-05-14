import { useState } from "react";
import uuid from "react-uuid";
import { Main } from "./components/Main";
import { Sidebar } from "./components/Sidebar";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = () => {
    // 日付と時間を取得
    const modDate = new Date();
    const newNote = {
      id: uuid(),
      title: "新しいノート",
      content: "新たしいノートの内容です",
      modDate: modDate.toLocaleDateString("ja-JP", {
        // 20:04など
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    setNotes([...notes, newNote]);
    console.log(notes);
  };
  return (
    <div className="App">
      <Sidebar addNote={addNote} notes={notes} />
      <Main />
    </div>
  );
}

export default App;
