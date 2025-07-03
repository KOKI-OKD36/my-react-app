import { useEffect, useState } from "react";
import EventList from "../components/EventList/EventList";
import HeroEvent from "../components/HeroEvent/HeroEvent";
import { dummyEvents } from "../data/events";

// 今日の日付を取得し、時間を00:00に設定
const today = new Date();
today.setHours(0, 0, 0, 0);

// 今日以降のイベントを抽出し、日付順にソート
const upcomingEvents = dummyEvents
  .filter((event) => new Date(event.date) >= today)
  .sort((a, b) => new Date(a.date) - new Date(b.date));

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 注目イベントを2秒ごとに切り替える
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === upcomingEvents.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="page-container">
      {/* ===== 注目イベントセクション ===== */}
      <section className="highlight-section">
        <h2 className="highlight-title">✨ 注目のイベント！！ ✨</h2>
        {upcomingEvents.length > 0 && (
          <div className="fade-wrapper">
            {upcomingEvents.map((event, index) => (
              <div
                key={event.id}
                className={`fade-item ${
                  index === currentIndex ? "active" : ""
                }`}
              >
                <HeroEvent event={event} />
              </div>
            ))}
          </div>
        )}
      </section>

      {/* ===== イベント一覧リンクとリスト ===== */}
      <section className="event-section">
        <a href="/events" className="event-list-button">
          イベント一覧
        </a>

        <h2 className="highlight-title">🎉 もうすぐのイベント！！ 🎉</h2>
        <EventList events={upcomingEvents} />
      </section>
    </div>
  );
}
