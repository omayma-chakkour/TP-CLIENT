import React from 'react';
import AppNavBar from './components/AppNavBar';
import ShoppingList from './components/ShoppingList';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import { createContext } from 'react';
function App() {
  
  

  return (
    <div className="App">
      <AppNavBar/>
      <ShoppingList/>
    </div>
  );
}

export default App;
