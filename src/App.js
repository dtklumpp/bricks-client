import './App.css';
// import Default from './components/default/default';
import Routes from './config/Routes';
import Header from './components/Header';

import { Container } from 'semantic-ui-react';


function App() {
  return (
    <>
      {/* <Container> */}
        <Header/>
        
        <Routes/>
      {/* </Container> */}
    </>
  )
}

export default App;
