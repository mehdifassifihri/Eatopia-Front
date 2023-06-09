
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './screens/Login';
import Welcome from './screens/Welcome';
import Homepage from './screens/Homepage';
import Preferences from './screens/Preferences';
import Restaurantdetails from './screens/Restaurantdetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/welcome' element={<Welcome/>}/>
      <Route path='/home' element={<Homepage/>}/>
      <Route path='/preferences' element={<Preferences/>}/>
      <Route path='/details/:id' element={<Restaurantdetails/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
