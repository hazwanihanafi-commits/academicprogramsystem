import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import accreditation from "../data/accreditation.json";
import srr from "../data/srr_coppa.json";

export default function Accreditation() {
  const [progress, setProgress] = useState({});

  // Load SRR progress
  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = localStorage.getItem("srr_progress");
    if (saved) setProgress(JSON.parse(saved));
  }, []);

  function persist(updated) {
    setProgress(updated);
    localStorage.setItem("srr_progress", JSON.stringify(updated));
  }

  function updateEvidence(code, value) {
    const updated = {
      ...progress,
      [code]: {
        ...(progress[code] || {}),
        evidence_link: value
      }
    };
    persist(updated);
  }

  function markDone(code) {
    if (!progress[code]?.evidence_link) {
      alert("Please paste evidence link first.");
      return;
    }

    const updated = {
      ...progress,
      [code]: {
        ...progress[code],
        status: "Completed"
      }
    };
    persist(updated);
  }

  function resetItem(code) {
    const updated = {
      ...progress,
      [code]: {
        status: "Pending",
        evidence_link: ""
      }
    };
    persist(updated);
  }

  function standardProgress(items) {
    const completed = items.filter(
      (i) => progress[i.code]?.status === "Completed"
    ).length;
    return Math.round((completed / items.length) * 100);
  }

  const allItems = srr.flatMap(sec => sec.items);
  const allCompleted = allItems.every(
    (i) => progress[i.code]?.status === "Completed"
  );

  return (
    <Layout>
      <h1>Accreditation & SRR (COPPA)</h1>

      {/* Programme Status */}
      <section>
        <p><b>Programme:</b> {accreditation.programme}</p>
        <p><b>Accreditation Status:</b> {accreditation.accreditation_status}</p>

        <p style={{ fontWeight: "bold", color: allCompleted ? "green" : "orange" }}>
          {allCompleted
            ? "✔ SRR READY FOR SUBMISSION"
            : "⏳ SRR IN PROGRESS"}
        </p>
      </section>

      {/* SRR Standards */}
      {srr.map((section) => {
        const percent = standardProgress(section.items);

        return (
          <div key={section.standard} style={{ marginBottom: 30 }}>
            <h2>{section.standard}</h2>

            {/* Progress bar */}
            <div style={{ background: "#eee", borderRadius: 6 }}>
              <div
                style={{
                  width: `${percent}%`,
                  background: percent === 100 ? "green" : "#4b2e83",
                  color: "white",
                  padding: "4px 8px",
                  borderRadius: 6
                }}
              >
                {percent}%
              </div>
            </div>

            {/* Items */}
            {section.items.map((item) => {
              const state = progress[item.code] || {};

              return (
                <div
                  key={item.code}
                  style={{
                    background: "white",
                    padding: 12,
                    marginTop: 10,
                    borderLeft:
                      state.status === "Completed"
                        ? "6px solid green"
                        : "6px solid #ccc"
                  }}
                >
                  <p>
                    <b>{item.code}</b> — {item.label}
                  </p>

                  <input
                    type="text"
                    placeholder="Paste evidence link (view-only)"
                    value={state.evidence_link || ""}
                    onChange={(e) =>
                      updateEvidence(item.code, e.target.value)
                    }
                    style={{ width: "100%" }}
                  />

                  {state.evidence_link && (
                    <p>
                      🔗{" "}
                      <a
                        href={state.evidence_link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Evidence
                      </a>
                    </p>
                  )}

                  {state.status !== "Completed" ? (
                    <button onClick={() => markDone(item.code)}>
                      ✔ Done
                    </button>
                  ) : (
                    <button onClick={() => resetItem(item.code)}>
                      ↺ Reset
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        );
      })}

      {/* Export */}
      <button onClick={() => window.print()}>
        📄 Export SRR (Print / PDF)
      </button>
    </Layout>
  );
}
