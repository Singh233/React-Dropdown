import { useState } from 'react'
import '../assets/css/App.css';
import Dropdown from './Dropdown';

function App() {
  // Options array
  const options = ['Yes', 'No', 'Probably Not'];

  return (
    <div className="App">
      <Dropdown options={options}/>
    </div>
  )
}

export default App
