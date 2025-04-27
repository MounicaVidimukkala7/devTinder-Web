import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./Navbar"
import Login from "./Login"
import Profile from "./Profile"
import Body from "./Body"
import SignUp from "./SignUp"

function App() {


  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/login" element={<Login />}> </Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
          </Route>
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
