import logo from './logo.svg';
import Profile from './components/Profile'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Diffsidebar from './components/diffsidebar'

import { BrowserRouter } from "react-router-dom";
import BaseRouter from './Routes'



function App() {
  return (
    <BrowserRouter>
        {/* <Header /> */}
        <Diffsidebar />
        <BaseRouter />
      </BrowserRouter>    
  );
}

export default App;
