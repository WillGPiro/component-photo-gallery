import React from 'react';
import logo from './logo.svg';
import './App.css';
import HornedList from './HornedList';
import Header from './Header';
import HornedItem from './HornedItem';
import images from './data';


function App() {
  return (
    <body>
      <Header />
    <section className ="HornedList">
      <HornedList />
    </section>

    </body>
  );
}

export default App;
