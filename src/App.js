import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Intro from './components/Intro';
import Trending from './components/Trending';

import "./style/landingPage.css"


function App() {
  return (
    <div>
      {/*intro */}
      <div className="myBG">
        <NavigationBar />
        <Intro/>
      </div>
      {/*end intro */}

      {/*Trendingg*/}
      <div className='trending'>
        <Trending/>
      </div>
    </div>
  );
}

export default App;
