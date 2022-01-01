import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useState } from "react";

function App() {
  const [events, setEvents] = useState([]);
  const [eventTitle, setEventTitle] = useState("");
  return (
    <div>
      <input
        placeholder="タイトルを入力"
        velue={eventTitle}
        onChange={(e) => setEventTitle(e.target.value)}
      />
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        dateClick={(e) => {
          const dateStr = e.dateStr;
          setEvents([...events, { title: eventTitle, date: dateStr }]);
          setEventTitle("");
        }}
      />
    </div>
  );
}

export default App;
