import "./app.scss"
import Home from './pages/home/Home'
import Watch from './pages/watch/Watch'
import Register from './pages/register/Register'
import Login from './pages/login/Login'
import { Routes, Route } from "react-router-dom"
const App = () => {
  return (
<>
<Routes>

<Route path='/' element={<Login />} />
<Route path='/register' element={<Register/>} />
<Route path='/watch' element={<Watch/>} />
<Route path='/home' element={<Home/>} />

</Routes>

</>
  );
};

export default App;