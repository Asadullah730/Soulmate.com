
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import UserInfoForm from "./components/UserInfoForm";
import Requirement from "./components/req";
function App() {
  return (
    <>
      <div>
        <Routes >
          <Route path="/" exact element={<Home/>} />
          <Route path="/register" element={<SignUp/>} />
          <Route path="/login" element={<SignIn/>} />
          <Route path="/userinfo" element = {<UserInfoForm/>}/> 
          <Route path="/requirement" element = {<Requirement/>}/> 
        </Routes>
        
      </div>  
    </>
  );
}

export default App;
