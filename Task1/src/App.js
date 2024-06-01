import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import Template from './component/Structure';
import Details from './component/Details';

const App = () => {
  return (
    <Routes>
    
        <Route path="/"  element={<Template></Template>} />
        <Route path="/details" element={<Details></Details>} />
      
    </Routes>
  );
};

export default App;