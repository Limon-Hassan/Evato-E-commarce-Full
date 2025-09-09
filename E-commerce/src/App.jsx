import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navber from './components/Navber';
import HomePage from './Pages/HomePage';
import Navber2 from './components/Navber2';
import Fotter from './components/Fotter';
import Registration from './Pages/Registration';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navber />
        <Navber2 />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/register" element={<Registration />}></Route>
        </Routes>
        <Fotter />
      </BrowserRouter>
    </>
  );
};

export default App;
