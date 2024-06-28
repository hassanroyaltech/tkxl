import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './component/home';
import About from './component/about';
import SimpleMessage from './component/functionalComponent';
import Counter from './component/classComponent';
import FormComponent from './component/formComponent';
import CounterFuntional from './component/functionalComponentWithHooks';
import Navigation from './component/nav';
import './App.css'
import SimpleMessageWithLogger from './component/layout';
const App = () => {
  return (
    <Router>
      <div>
      <Navigation/>
     

        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/functional" element={<SimpleMessage />} />
          <Route path="/class" element={<Counter />} />
          <Route path="/form" element={<FormComponent />} />
          <Route path="/state" element={<CounterFuntional />} />
          <Route path="/hoc" element={<SimpleMessageWithLogger />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;