import { useState } from "react";
import { Link } from "react-router-dom";

export default function EventList({
  events,
  showAll = false,
  pagination = false,
  vertical = false,
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // ページあたりの件数（例）

  // ページネーション用に表示イベントを絞り込み
  let displayEvents = showAll ? events : events.slice(0, 3);

  if (pagination) {
    const startIndex = (currentPage - 1) * itemsPerPage;
    displayEvents = events.slice(startIndex, startIndex + itemsPerPage);
  }

  const totalPages = Math.ceil(events.length / itemsPerPage);

  return (
    <>
      <ul className={`event-list ${vertical ? "vertical" : ""}`}>
        {displayEvents.map((event) => (
          <li key={event.id} className="event-item-wrapper">
            <Link to={`/events/${event.id}`} className="event-item-link">
              <div className="event-item">
                <img
                  src={event.image}
                  alt={event.title}
                  className="event-image"
                />
                <div className="event-details">
                  <h3>{event.title}</h3>
                  <p>{event.date}</p>
                  <p>{event.time}</p>
                  <p>{event.location}</p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      {/* ページネーション表示（paginationがtrueの場合のみ） */}
      {pagination && totalPages > 1 && (
        <div className="pagination">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
          >
            前へ
          </button>
          <span>
            {currentPage} / {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            次へ
          </button>
        </div>
      )}
    </>
  );
}
