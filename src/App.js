import { useEffect, useState } from "react";
import uuid from "react-uuid";
import { Main } from "./components/Main";
import { Sidebar } from "./components/Sidebar";
import "./App.css";

function App() {
  // localStrageから取り出す時はJSON形式からJSに戻す
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );
  // アクティブ状態のnoteを管理
  const [activeNote, setActiveNote] = useState(false);

  // notesの更新時にローカルストレージに保存
  useEffect(() => {
    // JSON形式に変換して保存
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  // リロードした時に一番上のノートを選択した状態にする
  // リロードした時だけ発火 -> useEffect（依存変数[]）
  useEffect(() => {
    setActiveNote(notes[0]);
  }, []);

  const addNote = () => {
    // 日付と時間を取得
    // const modDate = new Date();
    const newNote = {
      id: uuid(),
      title: "",
      content: "",
      modDate: Date.now(),
    };
    setNotes([...notes, newNote]);
  };

  const deleteNote = (id) => {
    const filteredNotes = notes.filter((note) => note.id !== id);
    setNotes(filteredNotes);
  };

  const updateNotes = (updatedNote) => {
    const updatedNotes = notes.map((note) => {
      if (note.id === updatedNote.id) {
        // note.idが選択されているメモidと一致していたらupdated~を格納
        return updatedNote;
      } else {
        // それ以外は現状のメモを格納
        return note;
      }
    });
    setNotes(updatedNotes);
  };

  // active状態のnoteを取得
  const getActiveNote = () => {
    // activeNote: sidebarクリックでnote.idをセットしている
    return notes.find((note) => note.id === activeNote);
  };

  return (
    <div className="App">
      <Sidebar
        addNote={addNote}
        notes={notes}
        deleteNote={deleteNote}
        activeNoteState={[activeNote, setActiveNote]}
      />
      <Main activeNote={getActiveNote()} updateNotes={updateNotes} />
    </div>
  );
}

export default App;
