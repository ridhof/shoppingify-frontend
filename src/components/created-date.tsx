"use client";

import EventNote from "@material-design-icons/svg/filled/event_note.svg";

function CreatedDate({ date }: { date: string }) {
  return (
    <div className="flex items-center gap-3">
      <EventNote className="fill-gray-400" />
      <span className="text-xs font-medium text-gray-400">{date}</span>
    </div>
  );
}

export default CreatedDate;
