import logo from './logo.svg';
import './App.css';
import Frame from './Frame/Frame';
import Router from './Router';
import { Loading } from './Pages';
import { useSelector } from 'react-redux';

function App() {
  const selector=useSelector(state=>state)
  const loading=selector.loading
  return (
    <Frame
    mainContent={
      loading.loading?(
        <Loading/>
      ):(
        <Router/>
      )
    }/>
  );
}

export default App;
