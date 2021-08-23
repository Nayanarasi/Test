import './App.css';
import Header from './components/Header';
import AddStudent from './components/AddStudent';
import AllStudent from './components/AllStudent';
import {BrowserRouter as Router, Route} from "react-router-dom"


function App() { //
  return (
    <Router>
    <div>
      <Header/>
      <Route path = "/" exact component = {AllStudent} />
      <Route path = "/add" exact component = {AddStudent}/>
      
    </div>
</Router>
  );
}

export default App;
