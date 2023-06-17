import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import NaviBar from './components/navibar.js';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import { Home } from "./Home"
import { Cupboards } from "./cupboards"
import { Kitchen } from "./Kitchen"
import FormComponent from './components/FormComponent';
import ThanksComponent from './components/ThanksComponent'
function App() {
  return (
    <>

      <Router>

        <NaviBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Cupboards" element={<Cupboards />} />
          <Route exact path="/Kitchen" element={<Kitchen />} />
          <Route exact path="/Form" component={<FormComponent />} />
          <Route path="/thanks" component={<ThanksComponent />} />
        </Routes>

      </Router>

    </>
  );
}

export default App;
