import logo from './logo.svg';
import './App.css';
import './style.css'
import Headers from './Components/Headers';
import Pagecontent from './Components/PageContent';
import Footers from './Components/Footers';

function App() {
  return (
    <div className="App">
      <Headers/>
      <Pagecontent/>
      <Footers/>
     
    </div>
  );
}

export default App;
