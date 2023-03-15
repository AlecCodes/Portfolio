import logo from './logo.svg';
import './App.scss';
import NavBar from './Components/Nav'
import { Outlet, Link } from 'react-router-dom';

function App() {
  const dlResume = (e) => console.log('resume download')
  return (
    <div className="App">
      <table>
        <tbody>
        <tr>
          <td></td>
          <td></td>
          <h1>Alec Hannaford</h1></tr>
        <tr>
          <td width='100px'></td>
          <td className='Links'>
            <Link to="/AboutMe">About Me</Link>
            <Link to ="">Projects</Link>
            <Link to="/Skills">Skills</Link>
            <Link onClick={dlResume}>Resume</Link>
            <Link to = "/Contact">Contact</Link>
          </td>
          <td></td>
          <td className='Body'><Outlet/></td>
        </tr>
        </tbody>
      </table>

    </div>
  );
}

export default App;
