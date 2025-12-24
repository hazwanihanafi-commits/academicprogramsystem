import Layout from "../components/Layout";
import accreditation from "../data/accreditation.json";
import phases from "../data/accreditation_phases.json";
import checklist from "../data/accreditation_checklist.json";
import srr from "../data/srr_coppa.json";

export default function Accreditation() {
  return (
    <Layout>
      <h1>Programme Accreditation</h1>

      {/* Programme Status */}
      <section>
        <h2>Accreditation Status</h2>
        <p><b>Programme:</b> {accreditation.programme}</p>
        <p><b>Status:</b> {accreditation.accreditation_status}</p>
        <p><b>Valid Until:</b> {accreditation.accreditation_valid_until}</p>
      </section>

      {/* Phases */}
      <section>
        <h2>Accreditation Phases</h2>
        <ul>
          {phases.map((p) => (
            <li key={p.key}>
              {p.label} — <b>{p.status}</b>
            </li>
          ))}
        </ul>
      </section>

      {/* Checklist */}
      <section>
        <h2>APP Checklist</h2>
        <ol>
          {checklist.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ol>
      </section>

      {/* SRR COPPA */}
      <section>
        <h2>SRR (COPPA Standards)</h2>
        {srr.map((section) => (
          <div key={section.standard} style={{ marginBottom: 20 }}>
            <h3>{section.standard}</h3>
            <ul>
              {section.items.map((item) => (
                <li key={item.code}>
                  <b>{item.code}</b> — {item.label}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </Layout>
  );
}
