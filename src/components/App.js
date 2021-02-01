import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CategoryPage from '../pages/CategoryPage';
import DetailsPage from '../pages/DetailsPage';
import Home from '../pages/Home';
import Header from './Header';

const App = () => {
  return (
    <Router>
      <Container>
        <Header />
        <Switch>
          <Route path='/:cat/:slug' exact>
            <DetailsPage />
          </Route>
          <Route path='/:cat' exact>
            <CategoryPage />
          </Route>
          <Route path='/' exact>
            <Home />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
