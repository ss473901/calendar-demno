import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useState } from "react";

function App() {
  const [events, setEvents] = useState([]);
  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        dateClick={(e) => {
          const dateStr = e.dateStr;
          setEvents([...events, { title: "テスト", date: dateStr }]);
        }}
      />
    </div>
  );
}

export default App;
