// import './App.css';
import { SignIn } from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';
import {Routes, Route} from "react-router-dom";
import Home from './Home/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/Home" element={<Home/>} />
        <Route path="/" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        
        
      </Routes>
      {/* <SignIn/> */}
    </div>
  );
}

export default App;
