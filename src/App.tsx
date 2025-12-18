import { Route, Routes } from 'react-router-dom';
import './App.css'
import { GameScreen } from './components/GameScreen';
import { HomeScreen } from './components/HomeScreen';

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomeScreen backgroundUrl='../../public/images/background/forest.png' />} />
      <Route
        path='/uvod'
        element=
        {<GameScreen
          backgroundUrl='../../public/images/background/hill-valley.png'
          mainText="Vítej v hře!"
        />} />
    </Routes>
  );
}

export default App
