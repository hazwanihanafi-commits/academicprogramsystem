import Layout from "../../components/Layout";
import students from "../../data/students.json";
import { useRouter } from "next/router";

export default function StudentProfile() {
  const router = useRouter();
  const { matric } = router.query;

  const student = students.find(s => s.matric === matric);

  if (!student) {
    return (
      <Layout>
        <p>Student not found.</p>
      </Layout>
    );
  }

  return (
    <Layout>
      <h1>Student Profile</h1>

      <div style={{ background: "white", padding: 20, borderRadius: 6 }}>
        <p><b>Name:</b> {student.name}</p>
        <p><b>Matric:</b> {student.matric}</p>
        <p><b>Programme:</b> {student.programme}</p>
        <p><b>Year:</b> {student.year}</p>
        <p><b>Status:</b> {student.status}</p>
      </div>
    </Layout>
  );
}
