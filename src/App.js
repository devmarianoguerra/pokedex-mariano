import "./App.css";
import Layout from "./components/Layout";
import PokemonGrid from "./components/PokemonGrid";

function App() {
  return (
    <div className="App">
      <Layout>
        <PokemonGrid />
      </Layout>
    </div>
  );
}

export default App;
