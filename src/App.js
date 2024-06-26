
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import UserInfoForm from "./components/UserInfoForm";
function App() {
  return (
    <>
      <div>
        <Routes >
          <Route path="/" exact element={<Home/>} />
          <Route path="/register" element={<SignUp/>} />
          <Route path="/login" element={<SignIn/>} />
          <Route path="/userinfo" element = {<UserInfoForm/>}/> 
        </Routes>
        
      </div>  
    </>
  );
}

export default App;
