import "./Main.css";
export const Main = ({ activeNote }) => {
  // ノートがない・初期表示
  if (!activeNote) {
    return <div className="no-active-note">ノートが選択されていません</div>;
  }
  return (
    <div className="app-main">
      <div className="app-main-note-edit">
        <input type="text" />
        <textarea placeholder="ノート内容を記入"></textarea>
      </div>
      <div className="app-main-note-preview">
        <div className="preview-title">{activeNote.title}</div>
        <div className="markdown-preview">
          {activeNote.content}
          {activeNote.id}
        </div>
      </div>
    </div>
  );
};
