import { Link } from "react-router-dom";

export default function AdminPage() {
  return (
    <div className="admin-page-container">
      <h2>管理者メニュー</h2>
      <div className="admin-section">
        <h3>応募一覧</h3>
        <ul>
          <li>
            <Link to="/admin/volunteer">ボランティア応募一覧</Link>
          </li>
          <li>
            <Link to="/admin/vendor">出店応募一覧</Link>
          </li>
          <li>
            <Link to="/admin/contact">その他お問い合わせ一覧</Link>
          </li>
        </ul>
      </div>

      <div className="admin-section">
        <h3>イベント管理</h3>
        <Link to="/admin/event-register">
          <button className="event-register-button">イベント登録</button>
        </Link>
      </div>
    </div>
  );
}
