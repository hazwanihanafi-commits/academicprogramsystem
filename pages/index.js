import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <h1>Welcome, Program Head</h1>
      <p style={{ color: "#555", marginBottom: 30 }}>
        Your central dashboard for programme governance, students, examinations,
        CQI and accreditation.
      </p>

      {/* Dashboard Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 20
        }}
      >
        {[
          {
            title: "Programme",
            desc: "Programme profile, PLOs and structure",
            icon: "📘",
            link: "/programme"
          },
          {
            title: "Students",
            desc: "Intake, status and supervision",
            icon: "🎓",
            link: "/students"
          },
          {
            title: "Tasks",
            desc: "Program Head responsibilities & deadlines",
            icon: "✅",
            link: "/tasks"
          },
          {
            title: "Examinations",
            desc: "Ikhtisas exams tracking (May / Nov)",
            icon: "📝",
            link: "/exams"
          },
          {
            title: "CQI",
            desc: "Issues, actions and monitoring",
            icon: "🔄",
            link: "/cqi"
          },
          {
            title: "Accreditation",
            desc: "SRR, COPPA standards and readiness",
            icon: "🏛️",
            link: "/accreditation"
          }
        ].map((card) => (
          <a
            key={card.title}
            href={card.link}
            style={{
              background: "white",
              padding: 20,
              borderRadius: 10,
              textDecoration: "none",
              color: "#2c2c2c",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              transition: "transform 0.15s ease"
            }}
          >
            <div style={{ fontSize: 32 }}>{card.icon}</div>
            <h3 style={{ marginTop: 10 }}>{card.title}</h3>
            <p style={{ color: "#555" }}>{card.desc}</p>
          </a>
        ))}
      </div>
    </Layout>
  );
}
