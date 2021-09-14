
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbbar from './components/Navbbar';
import Forma from './components/Forma'
import Dform from './components/Dform';
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    <div className="App">
     <div className = 'container'>
     <Navbbar/>
     <Forma/>
     <Dform/>
</div>
    </div>
  );
}

export default App;
