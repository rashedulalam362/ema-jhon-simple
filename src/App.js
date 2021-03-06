
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Header/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import NoMatch from './components/NoMatch/NoMatch';
import ProductDetail from './components/ProductDetail/ProductDetail';

function App() {
  return (
    <div >
       <Header/>
     <Router>
       <Switch>
         <Route path="/shop">
         <Shop/>
         </Route>
         <Route path="/review">
          <Review/>
         </Route>
         <Route path="/inventory">
         <Inventory></Inventory>
         </Route>
         <Route exact path="/">
         <Shop/>
         </Route>
         <Route exact path="/product/:productKeys/">
         <ProductDetail></ProductDetail>
         </Route>
         <Route path="*">
            <NoMatch />
          </Route>
         









       </Switch>


     </Router>


    
     
    </div>
  );
}

export default App;
