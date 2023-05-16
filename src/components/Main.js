import ReactMarkdown from "react-markdown";
import "./Main.css";
export const Main = ({ activeNote, updateNotes }) => {
  const editNote = (key, value) => {
    updateNotes({
      // スプレッド構文：これまでのnote内容に変更内容のみを追加
      ...activeNote,
      [key]: value, // key: title or content
      modDate: Date.now(),
    });
  };
  // ノートがない・初期表示
  if (!activeNote) {
    return <div className="no-active-note">ノートが選択されていません</div>;
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
          placeholder="ノート内容を記入"
          value={activeNote.content}
          onChange={(e) => editNote("content", e.target.value)}
        ></textarea>
      </div>
      <div className="app-main-note-preview">
        <div className="preview-title">{activeNote.title}</div>
        <ReactMarkdown className="markdown-preview">
          {activeNote.content}
        </ReactMarkdown>
      </div>
    </div>
  );
};
