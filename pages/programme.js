import Layout from "../components/Layout";
import programme from "../data/programme.json";

export default function Programme() {
  return (
    <Layout>
      <h1>Programme Profile</h1>

      <p><b>Programme:</b> {programme.name}</p>
      <p><b>Institution:</b> {programme.institution}</p>
      <p><b>Accreditation:</b> {programme.accreditation}</p>
      <p><b>Next Review:</b> {programme.nextReview}</p>

      <h3>Programme Learning Outcomes (PLO)</h3>
      <ul>
        {programme.plos.map((plo, i) => (
          <li key={i}>{plo}</li>
        ))}
      </ul>
    </Layout>
  );
}
