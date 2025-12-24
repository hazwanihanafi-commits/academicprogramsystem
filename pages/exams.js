import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import tasksData from "../data/program_head_tasks.json";

export default function Exams() {
  const [tasks, setTasks] = useState([]);

  // Load saved tasks or fallback to JSON (client-side only)
  useEffect(() => {
    if (typeof window === "undefined") return;

    const saved = localStorage.getItem("ph_tasks");
    if (saved) {
      setTasks(JSON.parse(saved));
    } else {
      setTasks(tasksData);
    }
  }, []);

  function persist(updated) {
    setTasks(updated);
    if (typeof window !== "undefined") {
      localStorage.setItem("ph_tasks", JSON.stringify(updated));
    }
  }

  function updateEvidence(index, value) {
    const updated = [...tasks];
    updated[index].evidence_link = value;
    persist(updated);
  }

  function markCompleted(index) {
    if (!tasks[index].evidence_link) {
      alert("Please paste evidence link before completing this exam task.");
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
    updated[index].evidence_link = "";
    persist(updated);
  }

  // 🔍 Filter & sort by due date
  const examTasks = tasks
    .filter((t) => t.category === "Examination")
    .sort((a, b) => new Date(a.due) - new Date(b.due));

  return (
    <Layout>
      <h1>Examination Tasks</h1>

      {examTasks.map((task) => {
        const originalIndex = tasks.findIndex(
          (t) => t.id === task.id
        );

        return (
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
            <p><b>Phase:</b> {task.phase}</p>
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
                    onChange={(e) =>
                      updateEvidence(originalIndex, e.target.value)
                    }
                    style={{ width: "100%", marginTop: 5 }}
                  />
                </label>

                {task.evidence_link && (
                  <p style={{ marginTop: 6 }}>
                    🔗{" "}
                    <a
                      href={task.evidence_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#4b2e83", fontWeight: "bold" }}
                    >
                      View Evidence
                    </a>
                  </p>
                )}
              </>
            )}

            <div style={{ marginTop: 10 }}>
              {task.status !== "Completed" ? (
                <button
                  onClick={() => markCompleted(originalIndex)}
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
              ) : (
                <>
                  <p style={{ color: "green", marginTop: 6 }}>
                    Completed on {task.completed_on}
                  </p>
                  <button
                    onClick={() => resetTask(originalIndex)}
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
        );
      })}
    </Layout>
  );
}
