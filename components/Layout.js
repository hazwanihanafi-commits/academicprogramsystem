import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <main style={{ padding: "24px" }}>
        {children}
      </main>
    </>
  );
}
