import Layout from "../components/Layout";

export default function Accreditation() {
  return (
    <Layout>
      <h1>Accreditation</h1>

      <div style={{ background: "white", padding: 20, borderRadius: 6 }}>
        <p><b>Status:</b> Accredited</p>
        <p><b>Body:</b> MQA / Professional Board</p>
        <p><b>Next Review:</b> 2027</p>
        <p>
          This page tracks accreditation status, conditions, and evidence
          required for audit.
        </p>
      </div>
    </Layout>
  );
}
