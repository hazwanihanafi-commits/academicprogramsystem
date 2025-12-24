import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import tasksData from "../data/program_head_tasks.json";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);

  // Load from localStorage or fallback to JSON
  useEffect(() => {
    const saved = localStorage.getItem("ph_tasks");
    if (saved) {
      setTasks(JSON.parse(saved));
    } else {
      setTasks(tasksData);
    }
  }, []);

  // Save to localStorage
  function persist(updated) {
    setTasks(updated);
    localStorage.setItem("ph_tasks", JSON.stringify(updated));
  }

  function updateEvidence(index, value) {
    const updated = [...tasks];
    updated[index].evidence_link = value;
    persist(updated);
  }

  function markCompleted(index) {
    if (!tasks[index].evidence_link) {
      alert("Please paste evidence link before completing this task.");
      return;
    }

    const updated = [...tasks];
    updated[index].status = "Completed";
    updated[index].completed_on = new Date().toISOString().split("T")[0];
    persist(updated);
  }

  function resetTask(index) {
    const updated = [...tasks];
    updated[index].status = "Pending";
    updated[index].completed_on = "";
    persist(updated);
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
            borderLeft:
              task.status === "Completed"
                ? "6px solid green"
                : "6px solid #4b2e83",
            borderRadius: 6
          }}
        >
          <h3>{task.title}</h3>
          <p><b>Due:</b> {task.due}</p>
          <p><b>Status:</b> {task.status}</p>

          {task.evidence_required && (
            <>
              <label>
                Evidence Link (View-only):
                <input
                  type="text"
                  placeholder="Paste Google Drive / OneDrive / USM link"
                  value={task.evidence_link || ""}
                  onChange={(e) => updateEvidence(idx, e.target.value)}
                  style={{ width: "100%", marginTop: 5 }}
                />
              </label>
            </>
          )}

          <div style={{ marginTop: 10 }}>
            {task.status !== "Completed" && (
              <button
                onClick={() => markCompleted(idx)}
                style={{
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
              <>
                <p style={{ color: "green", marginTop: 6 }}>
                  Completed on {task.completed_on}
                </p>
                <button
                  onClick={() => resetTask(idx)}
                  style={{
                    padding: "4px 10px",
                    background: "#999",
                    color: "white",
                    border: "none",
                    borderRadius: 4,
                    cursor: "pointer"
                  }}
                >
                  ↺ Reset
                </button>
              </>
            )}
          </div>
        </div>
      ))}
    </Layout>
  );
}
