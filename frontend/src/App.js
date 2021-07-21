
import './App.css';
import AddStudent from './components/AddStudent';
import Header from './components/Header';
import {BrowserRouter as Router ,Route} from  "react-router-dom";
import AllStudents from './components/StudentLists';
function App() {
  return (

    <Router>
 <div>
      <Header/>
     
      <Route path="/add" exact component ={AddStudent}/>
      <Route path ="/get" exact component = {AllStudents}/>
     
     
    </div>
    </Router>
   
  );
}

export default App;
