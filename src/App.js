import './App.css';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Login from './pages/Login';
import PrivateRouter from './pages/privateRouter';
import Register from './pages/Register';



function App() {

  return (
    <>
      <Routes>

        <Route path='/about' element={<About />}></Route>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register/>}></Route>

        <Route path='/home' element={<PrivateRouter />}>
          <Route path='/home' element={<Home />}></Route>
        </Route>

      </Routes>

    </>
  );
}

export default App;
