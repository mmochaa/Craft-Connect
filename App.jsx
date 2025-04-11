import { useState } from 'react';
import React from 'react';
import SignIn from "./signIn";
import Main from "./Main";

function App() {
  const [currentForm, setCurrent] = useState('login');
  return (
    <div>
      {currentForm === 'login' ? <SignIn /> : <Main />}
    </div>
  );
}

export default App;
