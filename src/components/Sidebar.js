import ReactMarkdown from "react-markdown";
import "./Sidebar.css";
export const Sidebar = ({
  addNote,
  notes,
  deleteNote,
  activeNote,
  setActiveNote,
}) => {
  // 4. sort notes
  const sortedNotes = notes.sort((a, b) => b.modDate - a.modDate);

  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>ノート</h1>
        <button onClick={addNote}>追加</button>
      </div>
      <div className="app-sidebar-notes">
        {sortedNotes.map((note) => (
          <div
            className={`app-sidebar-note ${
              note.id === activeNote.id && "active"
            }`}
            key={note.id}
            onClick={() => setActiveNote(note)}
          >
            <div className="sidebar-note-title">
              <strong>{note.title}</strong>
              <button onClick={() => deleteNote(note.id)}>削除</button>
            </div>

            <ReactMarkdown>{note.content}</ReactMarkdown>

            <small>
              {new Date(note.modDate).toLocaleDateString("ja-JP", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
};
