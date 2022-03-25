import './App.css';
import Nav from './components/nav/nav';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/home/home';
import Store from './pages/store/store';
import Fav from './pages/favourite/fav';
import Cart from './pages/cart/cart';
import Login from './pages/logIn/login';

import { BrowserRouter } from 'react-router-dom';
import Footer from './components/footer/footer';
import Prodpage from './components/prodspage/prodspage';
function App() {
  return (
    <BrowserRouter >
    <Nav />

    
   
     
        <Switch>
        <Route exact path='/'  ><Home /></Route>
        <Route path='/catigory'   />
        <Route path='/store' exact component={Store} />
        <Route path='/favourate' exact component={Fav} />
        <Route path='/cart' exact component={Cart} />
        <Route path='/login' exact component={Login} />
      </Switch>

      
    
    

    </BrowserRouter>
  );
}
export default App;
