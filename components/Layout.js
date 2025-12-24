import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
      <nav
        style={{
          background: "#4b2e83",
          padding: "10px 16px"
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "flex",
            gap: 16
          }}
        >
          <Link href="/" style={{ color: "white" }}>Home</Link>
          <Link href="/programme" style={{ color: "white" }}>Programme</Link>
          <Link href="/students" style={{ color: "white" }}>Students</Link>
          <Link href="/tasks" style={{ color: "white" }}>Tasks</Link>
          <Link href="/exams" style={{ color: "white" }}>Exams</Link>
          <Link href="/accreditation" style={{ color: "white" }}>Accreditation</Link>
        </div>
      </nav>

      <main className="container">
        {children}
      </main>
    </>
  );
}
