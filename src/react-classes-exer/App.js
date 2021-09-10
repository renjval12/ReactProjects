import './App.css';
import Welcome, { Wel1, Wel2 } from './welcomeClass';
import GreetingQ from './greetings';
export default function App() {
  return (
    <div className="App">
      <h1>Display Using React</h1>
      <GreetingQ />
      <h1>Hello (Insert Name)</h1>
      <Welcome fname='Renee'/>
      <Wel1 fname='Nancy'/>
      <Wel2 fname='Jac'/>
    </div>
  );
}

