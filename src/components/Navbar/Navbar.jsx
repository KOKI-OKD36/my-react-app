import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-title">
        <h1>藤沢イベント情報局</h1>
        <img src="/icons/logo.svg" alt="ロゴ" className="navbar-logo" />
      </div>
      <ul>
        <li>
          <Link to="/login">
            <img src="/icons/login.svg" alt="ログイン" className="nav-icon" />
            ログイン
          </Link>
        </li>
        <li>
          <Link to="/">
            <img src="/icons/home.svg" alt="ホーム" className="nav-icon" />
            ホーム
          </Link>
        </li>
        <li>
          <Link to="/events">
            <img
              src="/icons/event.svg"
              alt="イベント一覧"
              className="nav-icon"
            />
            イベント一覧
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <img src="/icons/idea.svg" alt="意見箱" className="nav-icon" />
            お問い合わせ
          </Link>
        </li>
      </ul>
    </nav>
  );
}
