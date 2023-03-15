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
            <span>
            <a><img src='https://cdn-icons-png.flaticon.com/512/174/174857.png'></img></a>
            <a><img src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png'></img></a>
            </span>
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
