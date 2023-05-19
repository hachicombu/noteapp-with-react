import { useState, useEffect } from "react";
import { Sidebar } from "./components/Sidebar";
import { Main } from "./components/Main";
import "./App.css";
import uuid from "react-uuid";

const App = () => {
  // 1.2. add/delete note
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes")));
  // 3. isActive?
  const [activeNote, setActiveNote] = useState({});

  useEffect(() => {
    // 5. save to local storage
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    // 6. リロード時に一番上のノートを選択
    setActiveNote(notes[0]);
  }, []);

  // 1. add note
  const addNote = () => {
    const newNote = {
      id: uuid(),
      title: "",
      content: "",
      modDate: Date.now(),
    };
    // notesにnewNoteを追加
    setNotes([...notes, newNote]);
    console.log(notes);
  };

  // 2. delete note
  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  // 3-2. update notes
  const updateNotes = (editedNote) => {
    const newNotes = notes.map(
      (note) => (note.id === editedNote.id ? editedNote : note)
      // {
      //   if (note.id === editedNote.id) {
      //     return editedNote;
      //   } else {
      //     return note;
      //   }
      // }
    );
    setNotes(newNotes);
  };

  return (
    <div className="App">
      <Sidebar
        addNote={addNote}
        notes={notes}
        deleteNote={deleteNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      <Main
        activeNote={activeNote}
        setActiveNote={setActiveNote}
        updateNotes={updateNotes}
      />
    </div>
  );
};
export default App;
