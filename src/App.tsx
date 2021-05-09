import { useEffect } from 'react';
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
import MasterForm from './components/pages/application/master-form';
import Quiz from './components/pages/quiz';
import Report from './components/pages/report';
import Products from './components/pages/products';
import PartnerLogin from './components/pages/partner-login';
import CustomerProfile from './components/pages/cutomer-profile';
import Contact from './components/pages/contact';
import PrivacyPolicy from './components/pages/privay-policy';
import TermsConditions from './components/pages/terms-conditions';
require('dotenv').config();
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authenticateUser());
  }, [dispatch]);

  return (
    <Router>

      <div className="App">
        <Switch>
          <ProtectedRoute path={'/application/report'} Component={Report} />
          <ProtectedRoute path={'/application/quiz'} Component={Quiz} />
          <ProtectedRoute path={'/application/start'} Component={MasterForm} />
          <ProtectedRoute path={'/application'} Component={Application} exact />
          <ProtectedRoute path={'/planbilling'} Component={PlanBilling} />
          <ProtectedRoute path={'/custprofile'} Component={CustomerProfile} />
          <Route path={'/login'} component={PartnerLogin} />
          <Route path={'/products'} component={Products} />
          <Route path={'/contacts'} component={Contact} />
          <Route path={'/privacy'} component={PrivacyPolicy} />
          <Route path={'/terms'} component={TermsConditions} />
          <Route path={'/'}>
            <Header />
            <div className="content">
              <Landing />
            </div>
            <Footer />
          </Route>
        </Switch>
      </div>
      <LoadingIndicator />
    </Router>
  );
}

export default App;
