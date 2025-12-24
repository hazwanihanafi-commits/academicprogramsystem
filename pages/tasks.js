import { useState } from "react";
import Layout from "../components/Layout";
import tasksData from "../data/program_head_tasks.json";

export default function Tasks() {
  const [tasks, setTasks] = useState(tasksData);

  function markCompleted(index) {
    const updated = [...tasks];
    updated[index] = {
      ...updated[index],
      status: "Completed",
      completed_on: new Date().toISOString().split("T")[0]
    };
    setTasks(updated);
  }

  function updateEvidence(index, value) {
    const updated = [...tasks];
    updated[index] = {
      ...updated[index],
      evidence_link: value
    };
    setTasks(updated);
  }

  return (
    <Layout>
      <h1>Program Head Tasks</h1>

      {tasks.map((task, idx) => (
        <div
          key={task.id}
          style={{
            background: "white",
            padding: 16,
            marginBottom: 12,
            borderLeft: task.status === "Completed" ? "6px solid green" : "6px solid #4b2e83",
            borderRadius: 6
          }}
        >
          <h3>{task.title}</h3>
          <p><b>Due:</b> {task.due}</p>
          <p><b>Status:</b> {task.status}</p>

          {task.evidence_required && (
            <>
              <label>
                Evidence Link:
                <input
                  type="text"
                  placeholder="Paste Google Drive / OneDrive link"
                  value={task.evidence_link || ""}
                  onChange={(e) => updateEvidence(idx, e.target.value)}
                  style={{ width: "100%", marginTop: 5 }}
                />
              </label>
            </>
          )}

          {task.status !== "Completed" && (
            <button
              onClick={() => markCompleted(idx)}
              style={{
                marginTop: 10,
                padding: "6px 12px",
                background: "#4b2e83",
                color: "white",
                border: "none",
                borderRadius: 4,
                cursor: "pointer"
              }}
            >
              ✔ Mark as Completed
            </button>
          )}

          {task.status === "Completed" && (
            <p style={{ color: "green" }}>
              Completed on {task.completed_on}
            </p>
          )}
        </div>
      ))}
    </Layout>
  );
}
