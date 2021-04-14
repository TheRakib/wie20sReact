import logo from './logo.svg';
import './App.css';
//import Menu1, { Menu , Menu2} from "./components/menu"
// default Då räcker med bara 
import Header from "./components/header";

import Card from "./components/card";
// import { Menu , Menu2} from "./components/menu"
function App() {
  return (
    <div className="App">
      
       <h1>Hello React!</h1>
          <Header/>
          <Card  name="Nike"  price="1200"/>
      
    </div>
  );
}

export default App;
