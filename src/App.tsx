import React from 'react';
import logo from './logo.svg';
import { Route,Routes } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import SiteLayout from './layouts/siteLayout';
import AdminLayout from './layouts/adminLayout';
import Admin from './pages/admin';

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path='/' element={<SiteLayout />}>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
            </Route>

            <Route path='/admin' element={<AdminLayout />}>
                 <Route path='/admin' element={<Admin />} />
            </Route>

        </Routes>
    </div>
  );
}

export default App;
