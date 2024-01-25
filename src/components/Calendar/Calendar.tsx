import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import { useState } from "react";

const CustomCalendar = () => {
  const localizer = momentLocalizer(moment);

  const eventOptions = [
    { title: "Conference", start: moment().add(1, "days").toDate() },
    { title: "Gym Session", start: moment().add(2, "days").toDate() },
    { title: "Training Session", start: moment().add(3, "days").toDate() },
    { title: "Game Analysis", start: moment().add(4, "days").toDate() },
  ];

  const [events, setEvents] = useState([
    {
      title: "Game",
      start: new Date(2024, 0, 8, 10, 0),
      end: new Date(2024, 0, 11, 12, 0),
      id: 1,
    },
    {
      title: "Recovery Session",
      start: new Date(2024, 0, 20, 14, 0),
      end: new Date(2024, 0, 20, 16, 0),
      id: 2,
    },
  ]);

  const getRandomEventOption = () => {
    return eventOptions[Math.floor(Math.random() * eventOptions.length)];
  };

  const handleAddEvent = () => {
    const newEventOption = getRandomEventOption();
    const newEvent = {
      title: newEventOption.title,
      start: newEventOption.start,
      end: moment(newEventOption.start).add(2, "hours").toDate(), 
      id: events.length + 1,
    };

    setEvents([...events, newEvent]);
  };

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
      <div className="flex w-60 mt-12">
        <PrimaryButton onClick={handleAddEvent}>
          Add new event
        </PrimaryButton>
      </div>
    </div>
  );
};

export default CustomCalendar;