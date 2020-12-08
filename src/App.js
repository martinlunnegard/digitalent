import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { Header } from './components/';
import { 
  Home, 
  Search, 
  EditCandidate 
} from './pages'; 
import { CandidatesProvider } from './context/CandidatesState';

const App = () => {
  return (
    <CandidatesProvider>
      <Router>
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/search" component={Search} />
          <Route path="/edit/:id" component={EditCandidate} />
        </Switch>
      </Router>
    </CandidatesProvider>
  );
}

export default App;
