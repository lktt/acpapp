import React from 'react';

const UpcomingCheckInsCheckOuts = ({ events }) => {
  return (
    <div className="upcoming-events">
      <h2>Upcoming Check-ins/Check-outs</h2>
      <ul>
        {events.map(event => (
          <li key={event.eventId}>
            <div>Guest: {event.guestName}</div>
            <div>Event: {event.type}</div>
            <div>Date: {event.date}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UpcomingCheckInsCheckOuts;
