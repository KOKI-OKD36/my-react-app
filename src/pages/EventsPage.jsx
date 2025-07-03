import { dummyEvents } from "../data/events";
import EventList from "../components/EventList/EventList";

export default function EventsPage() {
  return (
    <div className="page-container">
      <div className="event-header">
        <h2>イベント一覧</h2>
      </div>
      <EventList
        events={dummyEvents}
        showAll={true}
        pagination={true}
        vertical={true}
      />
    </div>
  );
}
