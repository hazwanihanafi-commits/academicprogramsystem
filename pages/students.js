import { useState } from "react";
import Layout from "../components/Layout";
import students from "../data/students.json";
import Link from "next/link";

export default function Students() {
  const [year, setYear] = useState("ALL");
  const [status, setStatus] = useState("ALL");

  const filtered = students.filter(s => {
    return (
      (year === "ALL" || String(s.year) === year) &&
      (status === "ALL" || s.status === status)
    );
  });

  const years = [...new Set(students.map(s => String(s.year)))];
  const statuses = [...new Set(students.map(s => s.status))];

  return (
    <Layout>
      <h1>Students</h1>

      {/* FILTERS */}
      <div style={{ marginBottom: 20 }}>
        <label>
          Year:
          <select value={year} onChange={e => setYear(e.target.value)}>
            <option value="ALL">All</option>
            {years.map(y => <option key={y}>{y}</option>)}
          </select>
        </label>

        <label style={{ marginLeft: 20 }}>
          Status:
          <select value={status} onChange={e => setStatus(e.target.value)}>
            <option value="ALL">All</option>
            {statuses.map(s => <option key={s}>{s}</option>)}
          </select>
        </label>
      </div>

      {/* STUDENT LIST */}
      {filtered.map(s => (
        <div key={s.matric} style={{
          background: "white",
          padding: 16,
          marginBottom: 12,
          borderRadius: 6
        }}>
          <Link href={`/students/${s.matric}`}>
            <b style={{ cursor: "pointer", color: "#4b2e83" }}>{s.name}</b>
          </Link>
          <p>Matric: {s.matric}</p>
          <p>Year: {s.year}</p>
          <p>Status: {s.status}</p>
        </div>
      ))}
    </Layout>
  );
}
