"use client";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import esLocale from "@fullcalendar/core/locales/es";
import { useState } from "react";
import { log } from "console";

function handleEventClick(clickInfo: {
  event: { title: any; remove: () => void };
}) {
  if (
    confirm(
      `Are you sure you want to delete the event '${clickInfo.event.title}'`
    )
  ) {
    clickInfo.event.remove();
  }
}
function handleDateClick(info: any) {
  alert("Clicked on: " + info.dateStr);
  alert("Coordinates: " + info.jsEvent.pageX + "," + info.jsEvent.pageY);
  alert("Current view: " + info.view.type);
}

function handleSelClick(info: any) {
  alert("Clicked on: " + info.startStr + " to " + info.endStr);
  alert("Coordinates: " + info.jsEvent.pageX + "," + info.jsEvent.pageY);
  alert("Current view: " + info.view.type);
}

const RealCalendar = ({
  data
}: {
  data: { title: string; start: Date; end: Date }[];
}) => {
  console.log(data);

  return (
    <div className="">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay"
        }}
        locale={esLocale}
        initialView="dayGridMonth"
        weekends={false}
        events={data}
        editable={true}
        eventClick={handleEventClick}
        dateClick={handleDateClick}
        select={handleSelClick}
        selectable={true}
      />
    </div>
  );
};

export default RealCalendar;
