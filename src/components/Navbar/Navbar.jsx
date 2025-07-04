import { Link, useNavigate } from "react-router-dom";

export default function Navbar({ auth, setAuth }) {
  const navigate = useNavigate();
  const isAdmin = auth?.role === "admin";

  const handleLogout = () => {
    localStorage.removeItem("auth");
    setAuth({ isAuthenticated: false, username: null, role: null });
    alert("ログアウトしました");
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="navbar-title">
        <h1>藤沢イベント情報局</h1>
        <img src="/icons/logo.svg" alt="ロゴ" className="navbar-logo" />
      </div>
      <ul>
        {auth.isAuthenticated ? (
          isAdmin ? (
            <>
              <li
                style={{
                  color: "white",
                  fontWeight: "500",
                  padding: "0.5rem 1rem",
                }}
              >
                管理者：{auth.username}
              </li>
              <li>
                <Link to="/" onClick={handleLogout} className="nav-link">
                  <img
                    src="/icons/logout.svg"
                    alt="ログアウト"
                    className="nav-icon"
                  />
                  ログアウト
                </Link>
              </li>
              <li>
                <Link to="/admin/volunteer" className="nav-link">
                  <img
                    src="/icons/volunteer.svg"
                    alt="ボランティア一覧"
                    className="nav-icon"
                  />
                  ボランティア一覧
                </Link>
              </li>
              <li>
                <Link to="/admin/vendor" className="nav-link">
                  <img
                    src="/icons/vendor.svg"
                    alt="出店一覧"
                    className="nav-icon"
                  />
                  出店一覧
                </Link>
              </li>
              <li>
                <Link to="/admin/contact" className="nav-link">
                  <img
                    src="/icons/idea.svg"
                    alt="お問い合わせ一覧"
                    className="nav-icon"
                  />
                  お問い合わせ一覧
                </Link>
              </li>
              <li>
                <Link to="/admin/event-register" className="nav-link">
                  <img
                    src="/icons/edit.svg"
                    alt="イベント登録"
                    className="nav-icon"
                  />
                  イベント登録
                </Link>
              </li>
            </>
          ) : (
            <>
              <li
                style={{
                  color: "white",
                  fontWeight: "500",
                  padding: "0.5rem 1rem",
                }}
              >
                {auth.username} さん
              </li>
              <li>
                <Link to="/" onClick={handleLogout} className="nav-link">
                  <img
                    src="/icons/logout.svg"
                    alt="ログアウト"
                    className="nav-icon"
                  />
                  ログアウト
                </Link>
              </li>
              <li>
                <Link to="/" className="nav-link">
                  <img
                    src="/icons/home.svg"
                    alt="ホーム"
                    className="nav-icon"
                  />
                  ホーム
                </Link>
              </li>
              <li>
                <Link to="/events" className="nav-link">
                  <img
                    src="/icons/event.svg"
                    alt="イベント一覧"
                    className="nav-icon"
                  />
                  イベント一覧
                </Link>
              </li>
              <li>
                <Link to="/contact" className="nav-link">
                  <img
                    src="/icons/idea.svg"
                    alt="お問い合わせ"
                    className="nav-icon"
                  />
                  お問い合わせ
                </Link>
              </li>
            </>
          )
        ) : (
          <>
            <li>
              <Link to="/login" className="nav-link">
                <img
                  src="/icons/login.svg"
                  alt="ログイン"
                  className="nav-icon"
                />
                ログイン
              </Link>
            </li>
            <li>
              <Link to="/" className="nav-link">
                <img src="/icons/home.svg" alt="ホーム" className="nav-icon" />
                ホーム
              </Link>
            </li>
            <li>
              <Link to="/events" className="nav-link">
                <img
                  src="/icons/event.svg"
                  alt="イベント一覧"
                  className="nav-icon"
                />
                イベント一覧
              </Link>
            </li>
            <li>
              <Link to="/contact" className="nav-link">
                <img
                  src="/icons/idea.svg"
                  alt="お問い合わせ"
                  className="nav-icon"
                />
                お問い合わせ
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
