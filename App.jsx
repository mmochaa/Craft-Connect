import { useState } from 'react'
import React from 'react';
import SignIn from "./signIn";




function App() {
const [currentForm, setCurrent] = useState('login');
  return (
    <SignIn/>
  )
}

export default App
