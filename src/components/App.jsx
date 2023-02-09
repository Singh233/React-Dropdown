import { useState } from 'react'
import '../assets/css/App.css';
import Dropdown from './Dropdown';

function App() {
  const items = ['Yes', 'No', 'Probably Not'];

  return (
    <div className="App">
      <Dropdown items={items}/>
    </div>
  )
}

export default App
