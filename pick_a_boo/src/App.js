import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import SearchParams from './views/SearchParams';
import Details from './views/Details';
import ThemeContext from './ThemeContext';


const App = () => {
  const theme = useState('darkblue');
  return (
    <ThemeContext.Provider value={theme}>
      <div>      
        <Router>
          <header>
          <Link to="/">
          <h1>Pick Me!</h1>
          </Link>
          </header>
          <Switch>
            <Route path="/details/:id">
              <Details />
            </Route>
            <Route path="/">
              <SearchParams />
            </Route>
          </Switch>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
