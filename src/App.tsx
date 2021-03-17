import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import LoadingIndicator from './components/atoms/loading-indicator';
import Landing from './components/pages/landing';
import ProtectedRoute from './components/atoms/protected-route';
import Application from './components/pages/application';
import PlanBilling from './components/pages/plan-billing';
import Header from './components/organisms/header';
import Footer from './components/organisms/footer';
import { authenticateUser } from './store/authentication';
import UnderContruction from './components/atoms/under-contruction';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authenticateUser());
  }, [dispatch]);

  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <Switch>
            <Route path={'/loantracker'} component={UnderContruction} />
            <ProtectedRoute path={'/startapplication'} Component={Application} />
            <ProtectedRoute path={'/planbilling'} Component={PlanBilling} />
            <Route path={'/'}>
              <Landing />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
      <LoadingIndicator />
    </Router>
  );
}

// ReactPDF.render(<InvoicePDF />, `${__dirname}/example.pdf`);
export default App;
