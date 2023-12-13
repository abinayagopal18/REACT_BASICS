import React from 'react'
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import Navigate from './DAY5/Navigate';
import Login from './DAY5/Login';
import Signup from './DAY5/Signup';
export default function App() {
  return (
    <div>
      <BrowserRouter>
         {/* <ul>
          <li>
            <Link to="/login">Login page</Link>
          </li>
          <li>
            <Link to="/signup">Signup page</Link>
          </li>
        </ul>  */}
        <Navigate/>
        <Routes>
          <Route path='/login' element = <Login/> ></Route>
          <Route path='/signup' element = <Signup/> ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
