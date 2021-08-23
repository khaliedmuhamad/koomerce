import './App.css';
import Nav from './components/nav/nav';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter >
         <Nav />
    </BrowserRouter>
  );
}
export default App;
