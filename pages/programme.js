import Layout from "../components/Layout";
import programme from "../data/programme.json";

export default function Programme() {
  if (!programme) {
    return (
      <Layout>
        <h1>Programme</h1>
        <p>Programme information is unavailable.</p>
      </Layout>
    );
  }

  return (
    <Layout>
      <h1>{programme.programme_name || "Programme"}</h1>

      <section>
        <p>{programme.programme_overview}</p>
      </section>

      <section>
        <h2>General Information</h2>
        <ul>
          <li><b>Institution:</b> {programme.institution}</li>
          <li><b>Faculty:</b> {programme.faculty}</li>
          <li><b>Campus:</b> {programme.campus}</li>
          <li>
            <b>Duration:</b>{" "}
            {programme.duration
              ? `${programme.duration.minimum_years}–${programme.duration.maximum_years} years`
              : "N/A"}
          </li>
        </ul>
      </section>

      {Array.isArray(programme.unique_features) && (
        <section>
          <h2>Why Study This Programme</h2>
          <ul>
            {programme.unique_features.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </section>
      )}

      {Array.isArray(programme.learning_methods) && (
        <section>
          <h2>Learning Methods</h2>
          <ul>
            {programme.learning_methods.map((method, idx) => (
              <li key={idx}>{method}</li>
            ))}
          </ul>
        </section>
      )}

      {Array.isArray(programme.programme_educational_objectives) && (
        <section>
          <h2>Programme Educational Objectives (PEO)</h2>
          <ul>
            {programme.programme_educational_objectives.map((peo) => (
              <li key={peo.code}>
                <b>{peo.code}:</b> {peo.description}
              </li>
            ))}
          </ul>
        </section>
      )}

      {Array.isArray(programme.programme_learning_outcomes) && (
        <section>
          <h2>Programme Learning Outcomes (PLO)</h2>
          <ul>
            {programme.programme_learning_outcomes.map((plo) => (
              <li key={plo.code}>
                <b>{plo.code} ({plo.domain}):</b> {plo.description}
              </li>
            ))}
          </ul>
        </section>
      )}

      {Array.isArray(programme.course_structure) && (
        <section>
          <h2>Course Structure</h2>
          {programme.course_structure.map((year, idx) => (
            <div key={idx}>
              <h4>Year {year.year}</h4>
              <p><b>Location:</b> {year.location}</p>
              <ul>
                {Array.isArray(year.focus) &&
                  year.focus.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
          ))}
        </section>
      )}

      {programme.contact_information?.programme_coordinator && (
        <section>
          <h2>Programme Coordinator</h2>
          <p>
            <b>{programme.contact_information.programme_coordinator.name}</b><br />
            {programme.contact_information.programme_coordinator.designation}<br />
            Email: {programme.contact_information.programme_coordinator.email}<br />
            Tel: {programme.contact_information.programme_coordinator.telephone}
          </p>
        </section>
      )}
    </Layout>
  );
}
