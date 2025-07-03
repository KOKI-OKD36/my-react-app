import { useState } from "react";

export default function SuggestionBox() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 簡易バリデーション
    if (!form.name || !form.email || !form.message) {
      alert("すべての項目を入力してください。");
      return;
    }

    // 送信処理（仮）
    alert("お問い合わせを送信しました。ありがとうございます！");
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="suggestion-box-container">
      <h2>お問い合わせフォーム</h2>

      {submitted && (
        <p className="submit-success">お問い合わせありがとうございます！</p>
      )}

      <form onSubmit={handleSubmit} className="suggestion-form">
        <label>
          <span>お名前</span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          <span>メールアドレス</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          <span>ご意見・ご要望</span>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={5}
            required
          />
        </label>

        <button type="submit">送信</button>
      </form>
    </div>
  );
}
