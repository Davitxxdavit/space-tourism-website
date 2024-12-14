import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements, Navigate } from 'react-router-dom';
import './App.css';
import Root from './Root';
import Home from './components/Home';
import Destination from './Destination';
import Technology from './Technology';
import Crew from './Crew';
import Moon from './components/Moon';
import Mars from './components/Mars';
import Europa from './components/Europa';
import Titan from './components/Titan';
import Commander from './components/Commander';
import Specialist from './components/Specialist';
import Engineer from './components/Engineer';
import Pilot from './components/Pilot';
import Launch from './components/Launch';
import Spaceport from './components/Spaceport';
import Capsule from './components/Capsule';

const router = createBrowserRouter(createRoutesFromElements(
<Route path="/" element={<Root/>}>
  <Route path='home' element={<Home/>}/>
  <Route path='destination' element={<Destination/>}>
      <Route path='moon' element={<Moon/>} />
      <Route path='mars' element={<Mars/>} />
      <Route path='europa' element={<Europa/>} />
      <Route path='titan' element={<Titan/>} />
      <Route index element={<Navigate to='moon' />}></Route>
  </Route>
  <Route path='crew' element={<Crew/>}>
      <Route path='commander' element={<Commander/>}/>
      <Route path='specialist' element={<Specialist/>}/>
      <Route path='pilot' element={<Pilot/>}/>
      <Route path='engineer' element={<Engineer/>}/>
      <Route index element={<Navigate to='commander' />}></Route>
  </Route>
  <Route path='technology' element={<Technology/>}>
      <Route path='launch' element={<Launch/>}></Route>
      <Route path='spaceport' element={<Spaceport/>}></Route>
      <Route path='capsule' element={<Capsule/>}></Route>
      <Route index element={<Navigate to='launch'/>}></Route>
  </Route>
  <Route index element={<Navigate to='home' />}></Route>
</Route>

));



function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
