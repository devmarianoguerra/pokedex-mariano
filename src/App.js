import './App.css';
import Layout from './components/Layout'
import PokemonGrid from './components/PokemonGrid'
import StatsChart from './components/StatsChart'

function App() {
  return (
    <div className="App">
      <Layout>
        <PokemonGrid/>
      </Layout>
    </div>
  );
}

export default App;
