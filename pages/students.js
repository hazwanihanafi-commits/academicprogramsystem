import Layout from "../components/Layout";
import students from "../data/students.json";

export default function Students() {
  return (
    <Layout>
      <h1>Students</h1>

      {students.length === 0 && <p>No students registered.</p>}

      {students.map((s, i) => (
        <div
          key={i}
          style={{
            background: "white",
            padding: "16px",
            marginBottom: "12px",
            borderRadius: "6px"
          }}
        >
          <p><b>Name:</b> {s.name}</p>
          <p><b>Status:</b> {s.status}</p>
        </div>
      ))}
    </Layout>
  );
}
