import React from 'react';
import './App.css';
import { Route , Routes } from 'react-router-dom';
import MenuBar from './components/menubar/MenuBar';
import LandingPage from './components/HomePage/LandingPage';

function App() {
  return (
    <>
      <MenuBar></MenuBar>
      <Routes>
          <Route path='/' element={
              <div className='container'>
                  <LandingPage></LandingPage>
              </div>
            }>
          </Route>
      </Routes>
    </>
  );
}

export default App;
