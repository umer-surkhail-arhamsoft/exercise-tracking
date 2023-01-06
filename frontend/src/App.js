import logo from './logo.svg';
import { Toaster } from 'react-hot-toast';

import Register from './components/Register';
import './App.css';

function App() {
  return (
    <div className="App">
      <Toaster/>
      <Register/>
    </div>
  );
}

export default App;
