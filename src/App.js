import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from './components/';
import { Home, Search, Edit } from './pages'; 
import { CandidatesProvider } from './context/CandidatesState';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

const App = () => {
  return (
    <CandidatesProvider>
      <Router>
        <Header />
        <Container>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/search" component={Search} />
            <Route path="/edit/:id" component={Edit} />
          </Switch>
        </Container>
      </Router>
    </CandidatesProvider>
  );
}

export default App;
