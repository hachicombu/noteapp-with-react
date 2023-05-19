import ReactMarkdown from "react-markdown";
import "./Main.css";
export const Main = ({ activeNote, setActiveNote, updateNotes }) => {
  // 3-1. updateNote
  const editNote = (key, value) => {
    const editedNote = {
      ...activeNote,
      [key]: value,
      modDate: Date.now(),
    };
    setActiveNote(editedNote);
    updateNotes(editedNote);
  };

  if (!activeNote) {
    return <div className="app-main-note-edit">ノートがありません。</div>;
  }

  return (
    <div className="app-main">
      <div className="app-main-note-edit">
        <input
          id="title"
          type="text"
          value={activeNote.title}
          onChange={(e) => editNote("title", e.target.value)}
        />
        <textarea
          id="content"
          value={activeNote.content}
          placeholder="ノート内容を入力してください"
          onChange={(e) => editNote("content", e.target.value)}
        ></textarea>
      </div>
      <div className="app-main-note-preview">
        <h1 className="preview-title">{activeNote.title}</h1>
        <ReactMarkdown className="markdown-preview">
          {activeNote.content}
        </ReactMarkdown>
      </div>
    </div>
  );
};
