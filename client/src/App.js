import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  ArticleDetail,
  ArticleList,
  Header,
  InputForm,
  UpdateForm
} from './components/components';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/' exact component={ArticleList} />
        <Route path='/create/' exact component={InputForm} />
        <Route path='/:id/' exact component={ArticleDetail} />
        <Route path='/:id/update/' exact component={UpdateForm} />
      </Switch>
    </Router>
  );
};

export default App;
