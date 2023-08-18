import { getOrganisedEvents } from "@/app/(queries)";
import styles from "./styles/Table.module.css"
import React from "react";

const Table = async ({events}:{events: DBEvent[] | null}) => {
  return (
    <div className="table-container">
      <table className={`table has-background-warning-light ${styles.table}`}>
        <thead className="gradient">
          <tr className="is-size-5">
            <th className="has-text-white">Name</th>
            <th className="has-text-white">Location</th>
            <th className="has-text-white">Date</th>
            <th className="has-text-white">Time</th>
            <th className="has-text-white">Duration</th>
            <th className="has-text-white">Attendees</th>
            <th className="has-text-white">Capacity</th>
          </tr>
        </thead>
        <tbody>
          {events ? (
            events.map((event: DBEvent) => (
              <tr>
                <td className="has-text-weight-bold">
                  <a className="has-text-dark">{event.name}</a>
                </td>
                <td>{event.location}</td>
                <td>{event.date}</td>
                <td>{event.time}</td>
                <td>{event.duration}</td>
                <td>{event.tickets}</td>
                <td>{event.capacity}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6} className="is-size-5 is-size-6-mobile p-5">There are no organised events to display.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
