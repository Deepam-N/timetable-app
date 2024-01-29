import logo from './logo.svg';
import './App.css';
import Table from 'react-bootstrap/Table';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <b>8<sup>th</sup> Semester Timetable</b>
        </p>
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      </header>
      <Table striped bordered hover variant="dark" className='App-table'> 
          <thead>
            <tr>
              <th>Time</th>
              <th>Mon</th>
              <th>Tue</th>
              <th>Wed</th>
              <th>Thu</th>
              <th>Fri</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>9:00</td>
              <td>HPC</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>10:00</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>11:00</td>
              <td></td>
              <td></td>
              <td>HPC</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>12:00</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>13:00</td>
              <td></td>
              <td>PM</td>
              <td></td>
              <td></td>
              <td>OD</td>
            </tr>
            <tr>
              <td>14:00</td>
              <td>PM</td>
              <td>OD</td>
              <td>IoT</td>
              <td>OD</td>
              <td>IoT</td>
            </tr>
            <tr>
              <td>15:00</td>
              <td>IoT</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>16:00</td>
              <td></td>
              <td></td>
              <td>PM</td>
              <td>IoT</td>
              <td></td>
            </tr>
            <tr>
              <td>17:00</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </Table>
    </div>
  );
}

export default App;
