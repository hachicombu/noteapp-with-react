import "./Sidebar.css";
export const Sidebar = ({ addNote, notes }) => {
  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>ノート</h1>
        <button onClick={addNote}>追加</button>
      </div>
      <div className="app-sidebar-notes">
        {notes.map((note) => (
          <div className="app-sidebar-note" key={note.id}>
            <div className="sidebar-note-title">
              <strong>{note.title}</strong>
              <button>削除</button>
            </div>
            <p>{note.content}</p>
            <small>{note.modDate}</small>
          </div>
        ))}
      </div>
    </div>
  );
};
