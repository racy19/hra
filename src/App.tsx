import { Route, Routes } from 'react-router-dom';
import './App.css'
import { GameScreen } from './components/GameScreen';

function App() {

  return (
    <Routes>
      <Route path="/" element={<GameScreen backgroundUrl='../../public/images/background/les.jpg' />} />
    </Routes>
  );
}

export default App
