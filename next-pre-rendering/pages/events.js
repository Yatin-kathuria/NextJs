import { useState } from "react";
import { useRouter } from "next/router";

const EventList = ({ eventList }) => {
  const [events, setEvents] = useState(eventList);
  const router = useRouter();
  const fetchSportsEvents = async () => {
    const response = await fetch(
      "http://localhost:4000/events?category=sports"
    );
    const data = await response.json();
    setEvents(data);
    router.push("/events?category=sports", undefined, { shallow: true });
  };
  return (
    <div>
      <button onClick={fetchSportsEvents}>Sports Event</button>
      <h1>List of events</h1>
      {events.map((event) => (
        <div key={event.id}>
          <h2>
            {event.id} {event.title} {event.date} | {event.category}
          </h2>
          <p>{event.description}</p>
          <hr />
          <hr />
        </div>
      ))}
    </div>
  );
};

export default EventList;

export async function getServerSideProps(context) {
  const {
    query: { category },
  } = context;
  const queryString = category ? "category=sports" : "";
  const response = await fetch("http://localhost:4000/events?" + queryString);
  const data = await response.json();

  return {
    props: {
      eventList: data,
    },
  };
}
