import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { Header } from './components/';
import { Home, Search, EditCandidate } from './pages'; 
import { CandidatesProvider } from './context/CandidatesState';

function App() {
  return (
    <CandidatesProvider>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/edit/:id">
            <EditCandidate />
          </Route>
        </Switch>
      </Router>
    </CandidatesProvider>
  );
}

export default App;
