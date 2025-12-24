import Layout from "../components/Layout";
import tasks from "../data/program_head_tasks.json";

export default function Tasks() {
  const today = new Date();

  return (
    <Layout>
      <h1>Program Head Tasks</h1>

      {tasks.map(task => {
        const overdue = new Date(task.due) < today && task.status !== "Completed";

        return (
          <div
            key={task.id}
            style={{
              background: "white",
              padding: 16,
              marginBottom: 12,
              borderLeft: overdue ? "6px solid red" : "6px solid #4b2e83",
              borderRadius: 6
            }}
          >
            <h3>{task.title}</h3>
            <p><b>Category:</b> {task.category}</p>
            <p><b>Phase:</b> {task.phase}</p>
            <p><b>Due:</b> {task.due}</p>
            <p><b>Status:</b> {task.status}</p>
            <p><b>Evidence Required:</b> {task.evidence_required ? "Yes" : "No"}</p>

            {overdue && (
              <p style={{ color: "red", fontWeight: "bold" }}>
                ⚠ Overdue – Immediate action required
              </p>
            )}
          </div>
        );
      })}
    </Layout>
  );
}
