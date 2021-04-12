import logo from './logo.svg';
import './App.css';
import Menu1, { Menu , Menu2} from "./components/menu"
// default Då räcker med bara import Menu from "./components/menu"
// import { Menu , Menu2} from "./components/menu"
function App() {
  return (
    <div className="App">
       <h1>Hello React!</h1>
       <Menu />
       <Menu2 />
       <Menu1 />
    </div>
  );
}

export default App;
