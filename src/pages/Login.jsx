import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { users } from "../data/users";

export default function Login({ setAuth }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const saved = localStorage.getItem("auth");
    if (saved) navigate("/");
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const matched = users.find(
      (u) => u.username === username && u.password === password
    );

    if (matched) {
      const authData = {
        username: matched.username,
        role: matched.role,
        isAuthenticated: true,
      };
      localStorage.setItem("auth", JSON.stringify(authData));
      setAuth(authData);
      navigate("/");
    } else {
      setError("ユーザー名またはパスワードが間違っています。");
    }
  };

  return (
    <div className="login-container">
      <h2>ログイン</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <label htmlFor="username">ユーザー名</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          autoFocus
        />

        <label htmlFor="password">パスワード</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && <p className="login-error">{error}</p>}

        <button type="submit">ログイン</button>
      </form>
    </div>
  );
}
