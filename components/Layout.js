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
      {[
        ["Home", "/"],
        ["Programme", "/programme"],
        ["Students", "/students"],
        ["Tasks", "/tasks"],
        ["Exams", "/exams"],
        ["Accreditation", "/accreditation"]
      ].map(([label, link]) => (
        <a
          key={label}
          href={link}
          style={{
            color: "white",
            textDecoration: "none",
            fontWeight: 500,
            opacity: 0.9
          }}
        >
          {label}
        </a>
      ))}
    </div>
  </div>
</nav>

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
