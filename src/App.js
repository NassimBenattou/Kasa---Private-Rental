import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
  Redirect
} from "react-router-dom";
import Accueil from './pages/Accueil';
import Apropos from './pages/Apropos';
import Appartement from './pages/Appartement';
import Error from './pages/Error'; 
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/appartement" element={<Appartement />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
