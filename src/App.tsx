import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';

import { AboutUs } from './pages/AboutUs';
import { Forms } from './pages/Forms';
import { Home } from './pages/Home';
import { Page404 } from './pages/Page404';

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="https://sch-aa-vk.github.io/RsSchool-react/" element={<Home />} />
        <Route path="https://sch-aa-vk.github.io/RsSchool-react/about-us" element={<AboutUs />} />
        <Route path="https://sch-aa-vk.github.io/RsSchool-react/forms" element={<Forms />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
};
