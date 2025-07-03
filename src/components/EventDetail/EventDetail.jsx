import { useParams, useNavigate } from "react-router-dom";
import { dummyEvents } from "../../data/events";

export default function EventDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = dummyEvents.find((e) => e.id === parseInt(id));

  if (!event) {
    return <p>イベントが見つかりません。</p>;
  }

  const dateObj = new Date(event.date);
  const formattedDate = dateObj.toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "short",
  });

  return (
    <div className="event-detail-page page-container">
      <div className="event-detail-container">
        <div className="event-detail-content">
          <h1 className="event-detail-title">{event.title}</h1>
          <img
            alt={event.title}
            src={event.image}
            className="event-detail-image"
          />

          <div className="event-detail-section">
            <h3>開催日</h3>
            <p>{formattedDate}</p>
          </div>
          <div className="event-detail-section">
            <h3>開催時間</h3>
            <p>{event.time}</p>
          </div>

          <div className="event-detail-section">
            <h3>場所</h3>
            <p>{event.location}</p>
          </div>

          <div className="event-detail-section">
            <h3>アクセス</h3>
            <p>{event.access}</p>
          </div>

          <div className="event-detail-section">
            <h3>詳細</h3>
            <p>{event.description}</p>
          </div>
        </div>
      </div>

      <button
        className="back-button bottom-center-fixed"
        onClick={() => navigate(-1)}
      >
        ← 戻る
      </button>
    </div>
  );
}
