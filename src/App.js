import './App.css';
import {createBrowserHistory} from 'history'
import {Route, Router, Switch,} from 'react-router'
import { HomeTemplate } from './templates/HomeTemplate/HomeTemplate';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import News from './pages/News/News';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Detail from './pages/Detail/Detail';
// import { CheckoutTemplate } from './templates/CheckoutTemplate/CheckoutTemplate';
import Checkout from './pages/Checkout/Checkout';
import { Suspense, lazy } from 'react';
import { UserTemplate } from './templates/UserTemplate/UserTemplate';
import Profile from './pages/Profile/Profile';
import Loading from './components/Loading/Loading';
const CheckoutTemplateLazy = lazy(() =>  import ('./templates/CheckoutTemplate/CheckoutTemplate'));

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
          <Loading />
        <Switch>
          <HomeTemplate path="/contact" exact Component={Contact}/>
          <HomeTemplate path="/home" exact Component={Home}/>
          <HomeTemplate path="/news" exact Component={News}/>
          <HomeTemplate path="/detail/:id" exact Component={Detail}/>
          <UserTemplate path="/login" exact Component={Login}/>
          <UserTemplate path="/register" exact Component={Register}/>
          <HomeTemplate path="/profile" exact Component={Profile}/>
          <HomeTemplate path="/" exact Component={Home}/>

          <Suspense fallback={ <Loading />}>
            <CheckoutTemplateLazy path="/checkout/:id" exact Component={Checkout}/>
          </Suspense>
        </Switch>
    </Router>
  );
}

export default App;
