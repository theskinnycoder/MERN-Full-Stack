import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import ArticleDetail from './screens/ArticleDetail';
import ArticleList from './screens/ArticleList';
import InputForm from './screens/InputForm';
import UpdateForm from './screens/UpdateForm';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/create/' component={InputForm} exact />
        <Route path='/:id/update/' component={UpdateForm} exact />
        <Route path='/:id/' component={ArticleDetail} exact />
        <Route path='/' component={ArticleList} exact />
      </Switch>
    </Router>
  );
};

export default App;
