import './App.css';
import Background from './Components/Background';
import StoreListing from './Components/StoreListing';
import TopBar from './Components/TopBar';

function App() {
  return (
    <div className="App">
      <TopBar />
      <Background />
      <StoreListing />
    </div>
  );
}

export default App;
