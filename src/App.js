import logo from './logo.svg';
import './App.css';
import MarkSheet from './components/MarkSheet';

function App() {
  let score = 5;
  return (
    <><div className="App">
      <h1>ARITHEMATIC OPERATORS</h1>
      <button onClick={() => {
        let A = 10 + 5;
        let B = 5 - 9;
        let C = 15 / 3;
        let D = 20 % 2;
        let E = 2 * 9;

        console.log(A, B, C, D, E);
      } }>Arithematic Operators</button>

      <button onClick={() => {
        score++;
        console.log(score);
      } }>Increment operator</button>

      <button onClick={() => {
        score--;
        console.log(score);
      } }>Decrement operator</button>

      <h1>ASSIGNMENT OPERATORS</h1>
      <button onClick={() => {
        let F = 5;
        F += 2;
        F *= 3;
        F /= 4;
        F %= 2;
        console.log(F);
      } }>Assignment operators</button>

      <h1>COMPARISION OPERATORS</h1>
      <button onClick={() => {
        let Marks = 45;
        console.log(Marks >= 45);
        console.log(Marks <= 35);
        console.log(Marks != 65);
        console.log(Marks == 45);
      } }>Comparision operators</button>

    </div><MarkSheet></MarkSheet></>
  );
}

export default App;
