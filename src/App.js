import logo from './logo.svg';
import './App.css';
import Frame from './Frame/Frame';
import Router from './Router';
import { Loading } from './Pages';

function App() {
  return (
    <Frame
    mainContent={<Loading/>}/>
  );
}

export default App;
