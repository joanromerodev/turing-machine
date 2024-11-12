import Layout from "./components/layout/Layout";
import Instructions from "./components/Instructions";
import Program from "./components/Program";
function App() {
  return (
    <>
      <Layout>
        <Program />
        <Instructions />
      </Layout>
    </>
  );
}

export default App;
