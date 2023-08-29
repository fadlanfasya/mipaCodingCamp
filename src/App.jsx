// import './App.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';

import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import Kurikulum from './pages/Kurikulum';
import Detail from './pages/Detail';
import FormDaftar from './pages/FormDaftar';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='/kurikulum' element={<Kurikulum />} />
      <Route path='/detail' element={<Detail />} />
      <Route path='/daftarsekarang' element={<FormDaftar />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
