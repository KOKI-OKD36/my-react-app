import { useState } from "react";
import { dummyEvents } from "../../data/events";

export default function VolunteerForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventId: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const date30DaysLater = new Date(today);
  date30DaysLater.setDate(today.getDate() + 30);

  const futureEvents = dummyEvents
    .filter((event) => new Date(event.date) >= date30DaysLater)
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const selectedEvent = dummyEvents.find(
      (e) => e.id === Number(formData.eventId)
    );

    alert(
      `応募ありがとうございました！\n名前: ${formData.name}\n応募イベント: ${selectedEvent?.title}`
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
    <div className="volunteer-form-container">
      <h2>ボランティア応募フォーム</h2>

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
          お名前（必須）
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="例：山田 太郎"
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
          ボランティア応募対象イベント（本日から30日以降の開催予定イベント）
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
          応募内容・メッセージ
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="興味のある活動や質問などをご記入ください"
            rows={4}
          />
        </label>

        <button type="submit">送信</button>
      </form>
    </div>
  );
}
