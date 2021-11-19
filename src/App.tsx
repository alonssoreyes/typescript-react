import { Counter } from "./components/Counter";
import { User } from './components/User';
import { TimerPadre } from './components/TimerPadre';
import { CounterReducer } from "./components/CounterReducer";


function App() {
  return (
    <div className="App">
      <h1 className="text-center mt-4">React and TypeScript</h1>
      <hr />
      <User/>

      <h2>UseEffect - UseRef</h2>
      <hr />
      <TimerPadre/>
      <hr />
      <h2>Use Reducer</h2>
      <CounterReducer/>
    </div>
  );
}

export default App;
