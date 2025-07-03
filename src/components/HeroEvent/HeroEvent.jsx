export default function HeroEvent({ event }) {
  const date = new Date(event.date);
  const formattedDate = date.toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "short",
  });

  return (
    <div className="hero-event fade-bg">
      {/* フェードイン画像背景 */}
      <div
        className="hero-bg-image"
        style={{ backgroundImage: `url(${event.image})` }}
      />

      {/* オーバーレイとテキスト */}
      <div className="hero-overlay">
        <div className="hero-content">
          <h2>{`${formattedDate} 開催！！`}</h2>
          <h1>{event.title}</h1>
          <p>場所：{event.location}</p>
          <p>時間：{event.time}</p>
        </div>
      </div>
    </div>
  );
}
