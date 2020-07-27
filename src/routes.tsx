import React from 'react';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { GlobalStyle } from './styles/GlobalStyles';
// import { useTheme } from './context/theme';

// import NavBar from './components/NavBar';
import Home from './pages/Home';
// import Contato from './pages/Contato';
// import Cursos from './pages/Cursos';
// import Portfolio from './pages/Portfolio';
// import AstroMuri from './pages/Portfolio/AstroMuri';
// import BergDaniel from './pages/Portfolio/BergDaniel';
// import VideoPlayer from './pages/Cursos/VideoPlayer';

const Routes: React.FC = () => {
  // const { theme, lockScroll } = useTheme();

  return (
    <>
      <GlobalStyle />
      <Home />
    </>
    // <BrowserRouter>
    //   <NavBar />
    //   <Switch>
    //     <Route path="/" exact component={Home} />
    //     <Route path="/contato" component={Contato} />
    //     <Route path="/cursos" exact component={Cursos} />
    //     <Route path="/cursos/:courseName" component={VideoPlayer} />
    //     <Route path="/portfolio" exact component={Portfolio} />
    //     <Route path="/portfolio/astromuri" component={AstroMuri} />
    //     <Route path="/portfolio/bergdaniel" component={BergDaniel} />
    //   </Switch>
    // </BrowserRouter>
  );
};

export default Routes;
