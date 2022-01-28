import './App.css';
import Cart from './components/Cart';
import Header from './components/Header';
import Main from './components/Main';

function App() {
    return ( 
      <div className = "App" >
        <Header/>
        <div className="row">
          <Main/>
          <Cart/>
        </div>
        
      </div>
    );
}

export default App;