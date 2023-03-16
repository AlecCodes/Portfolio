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
          <td><div>alec hannaford</div></td>
        </tr>
        <tr>
          <td width='100px'></td>
          <td className='Links'>
            <Link to="/AboutMe">about me</Link>
            <Link to ="">projects</Link>
            <Link to="/Skills">skills</Link>
            <a 
            href = "https://docs.google.com/document/d/1_XNrFfHQknI9V7kCpJt5JAXMfq8cJEaJeYNhISeBV4w/edit#heading=h.gjdgxs"
            target = "_blank"
            >resume</a>
            <Link to = "/Contact">contact</Link>
            <span>
            <a 
            href='https://www.linkedin.com/in/alec-hannaford/'
            target = "_blank"
            ><img src='https://cdn-icons-png.flaticon.com/512/174/174857.png'></img></a>
            <a 
            href='https://github.com/AlecCodes'
            target = "_blank"
            ><img src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png'></img></a>
            </span>
          </td>
          <td className='Body'><Outlet/></td>
          <td width = '50px'></td>
        </tr>
        </tbody>
      </table>

    </div>
  );
}

export default App;
