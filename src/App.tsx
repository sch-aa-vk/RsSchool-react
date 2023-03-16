import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from './layouts/Header/HeaderHome';
import { AboutUs } from './pages/AboutUs';
import { Home } from './pages/Home';
import { Page404 } from './pages/Page404';

export class App extends React.Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Home />} loader={() => console.log('true')} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
    );
  }
}
