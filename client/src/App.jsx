import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import RantDetail from './screens/RantDetail';
import RantList from './screens/RantList';
import InputForm from './screens/InputForm';
import UpdateForm from './screens/UpdateForm';

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3 container'>
        <Switch>
          <Route path='/create/' component={InputForm} exact />
          <Route path='/:id/update/' component={UpdateForm} exact />
          <Route path='/:id/' component={RantDetail} exact />
          <Route path='/' component={RantList} exact />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
