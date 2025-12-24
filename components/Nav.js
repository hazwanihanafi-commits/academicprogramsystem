import Link from "next/link";

export default function Nav() {
  return (
    <nav style={{ background: "#4b2e83", padding: "12px" }}>
      <Link href="/" style={{ color: "white", marginRight: 15 }}>Dashboard</Link>
      <Link href="/programme" style={{ color: "white", marginRight: 15 }}>Programme</Link>
      <Link href="/students" style={{ color: "white", marginRight: 15 }}>Students</Link>
      <Link href="/cqi" style={{ color: "white", marginRight: 15 }}>CQI</Link>
      <Link href="/accreditation" style={{ color: "white", marginRight: 15 }}>Accreditation</Link>
      <Link href="/exams" style={{ color: "white", marginRight: 15 }}>Exams</Link>
      <Link href="/tasks" style={{ color: "white" }}>Tasks</Link>
    </nav>
  );
}
