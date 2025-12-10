import { Route, Routes } from 'react-router-dom';
import './App.css'
import { GameScreen } from './components/GameScreen';
import { HomeScreen } from './components/HomeScreen';

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomeScreen backgroundUrl='../../public/images/background/les.jpg' />} />
      <Route path='/uvod' element={<GameScreen backgroundUrl='../../public/images/background/les.jpg' />} />
    </Routes>
  );
}

export default App
