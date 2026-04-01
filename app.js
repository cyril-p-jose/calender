import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function App() {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState([]);

  const addEvent = (title) => {
    setEvents([...events, { date, title }]);
  };

  return (
    <div>
      <h1>My Calendar</h1>
      <Calendar onChange={setDate} value={date} />
      <button onClick={() => addEvent("Meeting with team")}>
        Add Event
      </button>
      <ul>
        {events.map((e, i) => (
          <li key={i}>{e.date.toDateString()}: {e.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
