
import './App.css';
import AnimalTable from './components/AnimalTable';

function App() {
  return (
    <div className="App">
      <hr/>
      <h1>Animal Matching Game</h1>
      <hr/>
      <table>
        <tbody>
          <tr>
            <td>
            <AnimalTable/>
            </td>
          </tr>
        </tbody>
      </table>
     
    </div>
  );
}

export default App;
