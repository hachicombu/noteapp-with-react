import "./Sidebar.css";
export const Sidebar = ({ addNote, notes, deleteNote, activeNoteState }) => {
  const [activeNote, setActiveNote] = activeNoteState;
  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>ノート</h1>
        <button onClick={addNote}>追加</button>
      </div>
      <div className="app-sidebar-notes">
        {notes.map((note) => (
          <div
            className={`app-sidebar-note ${note.id === activeNote && "active"}`}
            key={note.id}
            onClick={() => setActiveNote(note.id)}
          >
            <div className="sidebar-note-title">
              <strong>{note.title}</strong>
              <button onClick={() => deleteNote(note.id)}>削除</button>
            </div>
            <p>{note.content}</p>
            <small>{note.modDate}</small>
          </div>
        ))}
      </div>
    </div>
  );
};
