import { useState } from 'react';
import React from 'react';
import SignIn from "./signIn";
import Main from "./Main";

function App() {
  const [currentForm, setCurrent] = useState('login');

  const handleSignInClick = () => {
    setCurrent('signin');
  };

  return (
    <div>
      {currentForm === 'login' ? <SignIn /> : <Main onSignInClick={handleSignInClick} />}
    </div>
  );
}

export default App;
