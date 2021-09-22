import './App.css';
import Navbar from './components/Navbar/Navbar';
import Homepage from './components/HomePage/HomePage';
import WorkoutList from './components/WorkoutList/WorkoutList';
import Stopwatch from './components/StopWatch/Stopwatch';
import ExerciseForm from './components/ExerciseForm/ExerciseForm';
import { Route, Switch } from 'react-router';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <Stopwatch />
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/workouts" component={WorkoutList} />
      </Switch>
    </div>
  );
}

export default App;
