import logo from './logo.svg';
import './App.css';
import NavBar from './Components/Nav'
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <tbody>
        <tr>Alec Hannaford</tr>
        <tr>
          <td>links</td>
          <td>gap</td>
          <td className='Body'><Outlet/></td>
        </tr>
      </tbody>

    </div>
  );
}

export default App;
