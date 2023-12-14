import logo from './logo.svg';
import './App.css';
import Frame from './Frame/Frame';
import Router from './Router';

function App() {
  return (
    <Frame
    mainContent={<Router/>}/>
  );
}

export default App;
