import Layout from "../components/Layout";
import tasks from "../data/program_head_tasks.json";

export default function Exams() {
  const examTasks = tasks.filter(
    t => t.category === "Examination"
  );

  return (
    <Layout>
      <h1>Examinations</h1>

      {examTasks.map(task => (
        <div
          key={task.id}
          style={{
            background: "white",
            padding: 16,
            marginBottom: 12,
            borderRadius: 6
          }}
        >
          <h3>{task.title}</h3>
          <p><b>Phase:</b> {task.phase}</p>
          <p><b>Due:</b> {task.due}</p>
          <p><b>Status:</b> {task.status}</p>
        </div>
      ))}
    </Layout>
  );
}
