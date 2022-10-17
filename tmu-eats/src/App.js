import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import LoginPage from "../src/login-flow/LoginPage"

function App() {
  return (
    <Router>
      <Routes>
        <Route path ="/" element = {<LoginPage/>}/>
        <Route path ="/cart" element = {<LoginPage/>}/>
        <Route path ="/home" element = {<LoginPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
