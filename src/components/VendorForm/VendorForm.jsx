import { useState } from "react";
import { dummyEvents } from "../../data/events";

export default function VendorForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventId: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // 今日 +30日後以降のイベントだけ抽出
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const date30DaysLater = new Date(today);
  date30DaysLater.setDate(today.getDate() + 30);

  const futureEvents = dummyEvents
    .filter((event) => new Date(event.date) >= date30DaysLater)
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  // 入力変更をstateに反映
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 送信処理
  const handleSubmit = (e) => {
    e.preventDefault();

    const selectedEvent = dummyEvents.find(
      (e) => e.id === Number(formData.eventId)
    );

    alert(
      `出店応募を受け付けました！\n出店名: ${formData.name}\nイベント: ${selectedEvent?.title}`
    );

    setFormData({
      name: "",
      email: "",
      phone: "",
      eventId: "",
      message: "",
    });

    setSubmitted(true);
  };

  return (
    <div className="vendor-form-container">
      <h2>出店応募フォーム</h2>

      {submitted && (
        <p className="submit-success" style={{ color: "green" }}>
          応募完了しました。
          <br />
          test@test.com からのメールをお待ちください。
          <br />
          ありがとうございます！
        </p>
      )}

      <form onSubmit={handleSubmit}>
        <label>
          出店名（必須）
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="例：焼きそば屋台"
          />
        </label>

        <label>
          メールアドレス（必須）
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="example@example.com"
          />
        </label>

        <label>
          電話番号（任意）
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="090-1234-5678"
          />
        </label>

        <label>
          出店応募イベント（本日から30日以降の開催予定イベント）
          <select
            name="eventId"
            value={formData.eventId}
            onChange={handleChange}
            required
          >
            <option value="">イベントを選択してください</option>
            {futureEvents.map((event) => (
              <option key={event.id} value={event.id}>
                {event.title}（{event.date} 開催）
              </option>
            ))}
          </select>
        </label>

        <label>
          メッセージ・要望（任意）
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="出店内容や希望事項などをご記入ください"
            rows={4}
          />
        </label>

        <button type="submit">送信</button>
      </form>
    </div>
  );
}
