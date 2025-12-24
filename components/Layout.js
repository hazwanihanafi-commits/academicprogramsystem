import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
      <nav
        style={{
          background: "linear-gradient(90deg, #4b2e83, #3a1f6b)",
          padding: "12px 0"
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 16px"
          }}
        >
          <div style={{ color: "white", fontWeight: "bold" }}>
            Program Head Companion
          </div>

          <div style={{ display: "flex", gap: 18 }}>
            <Link href="/" style={{ color: "white", textDecoration: "none" }}>
              Home
            </Link>
            <Link href="/programme" style={{ color: "white", textDecoration: "none" }}>
              Programme
            </Link>
            <Link href="/students" style={{ color: "white", textDecoration: "none" }}>
              Students
            </Link>
            <Link href="/tasks" style={{ color: "white", textDecoration: "none" }}>
              Tasks
            </Link>
            <Link href="/exams" style={{ color: "white", textDecoration: "none" }}>
              Exams
            </Link>
            <Link href="/accreditation" style={{ color: "white", textDecoration: "none" }}>
              Accreditation
            </Link>
          </div>
        </div>
      </nav>

      <main className="container">
        {children}
      </main>
    </>
  );
}
